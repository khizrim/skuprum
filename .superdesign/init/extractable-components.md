# Extractable components

#### Layout Components
## Header
- Source: `src/components/Header/Header.tsx`
- Category: layout
- Description: Top bar with Skuprum logo left and phone/contacts right
- Extractable props: none
- Hardcoded: logo, phone numbers, all CSS

## Footer
- Source: `src/components/Footer/Footer.tsx`
- Category: layout
- Description: Logo + copyright, phones + email, two Moscow addresses with Yandex route links
- Extractable props: none
- Hardcoded: addresses, phones, email

#### Basic Components
## CTAButtons
- Source: `src/components/CTAButtons/CTAButtons.tsx`
- Category: basic
- Description: Primary "Позвонить" button + outlined "Написать в WhatsApp" button
- Extractable props: centered (boolean, default: false)
- Hardcoded: labels, colors
