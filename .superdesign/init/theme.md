# Theme

## Part 1 — Token summary
- No custom tokens: Tailwind v4 defaults (`@import 'tailwindcss'`), typography plugin.
- Colors in use: text gray-900/gray-700/gray-600/gray-500; primary CTA blue-600 (hover blue-700); WhatsApp CTA green-700 text + green-600 border; accent price red-500; highlight flash yellow-100; dashed outline blue-700 on calculator chips.
- Font: system default sans (no custom font loaded).
- Headline: `text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1]`; subhead text-xl/sm:text-3xl semibold; small text-sm.
- Radius: rounded-2xl for buttons/chips.
- Container: max-w-6xl, px-4 sm:px-6 lg:px-12. White background, theme-color #fff.
- Breakpoints: Tailwind defaults (sm 640, md 768, lg 1024, xl 1280).

## Part 2 — Raw sources
```css
@import 'tailwindcss';
@plugin "@tailwindcss/typography";
:root {
    overflow-x: hidden;
    max-width: 100dvw;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    max-width: 100dvw;
    overflow-x: hidden;
}```
```ts
/**
 * This is the base config for vite.
 * When building, the adapter config is used which loads this file and extends it.
 */
import { defineConfig, type UserConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import pkg from './package.json';
import tailwindcss from '@tailwindcss/vite';
type PkgDep = Record<string, string>;
const { dependencies = {}, devDependencies = {} } = pkg as any as {
  dependencies: PkgDep;
  devDependencies: PkgDep;
  [key: string]: unknown;
};
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
/**
 * Note that Vite normally starts from `index.html` but the qwikCity plugin makes start at `src/entry.ssr.tsx` instead.
 */

export default defineConfig(({ command, mode }): UserConfig => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), tailwindcss()],
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: [],
    },
    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev dependencies. (otherwise things will break in production)
     */
    // ssr:
    //   command === "build" && mode === "production"
    //     ? {
    //         // All dev dependencies should be bundled in the server build
    //         noExternal: Object.keys(devDependencies),
    //         // Anything marked as a dependency will not be bundled
    //         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
    //         // If a dep-of-dep needs to be external, add it here
    //         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
    //         // external: [...Object.keys(dependencies), 'bcrypt']
    //         external: Object.keys(dependencies),
    //       }
    //     : undefined,
    server: {
      headers: {
        // Don't cache the server response in dev mode
        'Cache-Control': 'public, max-age=0',
      },
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
// *** utils ***
/**
 * Function to identify duplicate dependencies and throw an error
 * @param {Object} devDependencies - List of development dependencies
 * @param {Object} dependencies - List of production dependencies
 */
function errorOnDuplicatesPkgDeps(
  devDependencies: PkgDep,
  dependencies: PkgDep
) {
  let msg = '';
  // Create an array 'duplicateDeps' by filtering devDependencies.
  // If a dependency also exists in dependencies, it is considered a duplicate.
  const duplicateDeps = Object.keys(devDependencies).filter(
    (dep) => dependencies[dep]
  );
  // include any known qwik packages
  const qwikPkg = Object.keys(dependencies).filter((value) =>
    /qwik/i.test(value)
  );
  // any errors for missing "qwik-city-plan"
  // [PLUGIN_ERROR]: Invalid module "@qwik-city-plan" is not a valid package
  msg = `Move qwik packages ${qwikPkg.join(', ')} to devDependencies`;
  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }
  // Format the error message with the duplicates list.
  // The `join` function is used to represent the elements of the 'duplicateDeps' array as a comma-separated string.
  msg = `
    Warning: The dependency "${duplicateDeps.join(', ')}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
  // Throw an error with the constructed message.
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}
```
