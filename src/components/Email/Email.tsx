import { component$ } from '@builder.io/qwik';

export interface EmailProps {
    email: {
        address: string;
        title?: string;
    };
}

export const Email = component$<EmailProps>(({ email }) => {
    return (
        <div itemScope itemType="https://schema.org/ContactPoint">
            <meta itemProp="contactType" content="customer service" />
            <a
                href={`mailto:${email.address}`}
                class="inline-block text-blue-600 hover:underline"
                itemProp="email"
                title={email.title || `Написать на ${email.address}`}
                aria-label={email.title || `Написать на ${email.address}`}
            >
                ✉️ {email.address}
            </a>
        </div>
    );
}); 