import {
  createQwikCity,
  type PlatformNetlify,
} from '@builder.io/qwik-city/middleware/netlify-edge';
import qwikCityPlan from '@qwik-city-plan';
import { manifest } from '@qwik-client-manifest';
import render from './entry.ssr';

declare global {
  interface QwikCityPlatform extends PlatformNetlify {}
}

export default createQwikCity({ render, qwikCityPlan, manifest });
