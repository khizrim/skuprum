# Skuprum — Design System (redesign direction)

## Product context
- Skuprum (skuprum.ru) buys scrap metal in Moscow: copper, cable, brass, bronze, aluminium, cans, stainless, lead, batteries, ferrous scrap, plus rare metals (titanium, tin, POS solder, HSS, nichrome, tantalum, molybdenum, VK/TK hard alloys, niobium, cobalt, bismuth, babbitt).
- Audience: private people clearing a garage/renovation, electricians and builders with cable offcuts, small companies with production waste. Mostly mobile, often in a hurry, comparing 2–3 buyers by price.
- Job to be done: "Find out how much I'll get for my metal right now, trust the weighing, and hand it over today with no hassle."
- Single page (one-pager). Primary conversion: phone call. Secondary: WhatsApp message, short lead form (name optional, phone, metal, approx. weight, optional photo) for pickup.
- Facts to use verbatim: phone 8 (499) 390-79-15; open daily 08:00–23:00; two yards in Moscow (ул. Смольная, д. 2 and Остаповский проезд, д. 4, стр. 2); Yandex rating 4.7 from 25 reviews; up to 777 ₽/kg for copper cable; pickup of non-ferrous from 50 kg and ferrous from 500 kg same day; electronic scales, video recording on request; cash or transfer within 5 minutes; documents (act, waybill, contract) on request.
- Brand wordmark: lowercase "skuprum", extra-bold, tight tracking. No pictorial logo exists — render the wordmark as text only, never invent an icon mark.
- Language: Russian, with proper typography (non-breaking spaces, «ёлочки», em dashes).

## Page structure (conversion order)
1. Header: wordmark, "Ежедневно 08–23", phone link, compact "Позвонить" button. Sticky, slim.
2. Hero: big headline with the live calculator sentence "Сдать [5] кг [Медь] — получить до X ₽" (weight and metal are inline editable chips). Primary CTA "Позвонить", secondary "Написать в WhatsApp". Trust row under CTAs: ★ 4.7 Яндекс · 25 отзывов, оплата за 5 минут, вывоз в день заявки.
3. Prices: today's price list as a clean table/grid of metal cards with photo, name, ₽/kg, date "Цены на сегодня". Filter tabs: Цветные / Чёрные / Редкие.
4. Lead form block ("Узнайте точную цену по фото"): phone, metal select, approx. weight, photo upload, CTA "Получить цену". Note "Перезвоним за 10 минут".
5. Why us: 4 proof points (max prices, fast pickup, honest weighing, instant payment) — numbers first.
6. How it works: 5 numbered steps in a horizontal timeline (desktop) / vertical (mobile).
7. Honesty manifesto: one strong statement block ("Мы не занижаем вес…").
8. Reviews: Yandex rating summary + review cards.
9. Locations: two yards with map, address, hours, "Построить маршрут".
10. Final CTA band + footer (contacts, addresses, email, copyright).
- Mobile: fixed bottom action bar with "Позвонить" and WhatsApp, always visible.

## Visual direction: "industrial precision, warm metal"
Confident, clean, slightly industrial. Feels like a modern fintech-grade service, not a typical scrap-yard site. Generous whitespace, strong typographic hierarchy, real metal photography, no clutter.

### Color
- Background: #F7F5F2 (warm off-white). Surface: #FFFFFF. Subtle surface: #EFECE7.
- Ink: #14161A (primary text), #4A4F57 (secondary), #8A9099 (muted). Borders: #E2DED7.
- Dark sections: #121417 (graphite) with text #F7F5F2.
- Brand accent (copper): #C8662B; hover #A9521F; tint #F6E7DC. Used for prices, key numbers, primary CTA, highlights. Max ~10% of the screen.
- WhatsApp: #1FA855 (only for the WhatsApp button/icon).
- Success/verified: #2E8B57. Rating star: #F5A524.
- No purple/blue gradients, no neon, no glassmorphism.

### Typography
- Font family: "Onest" (Google Fonts, Cyrillic), fallback system sans. One family only.
- Display: 64–88px desktop / 40–44px mobile, weight 800, line-height 1.0, letter-spacing -0.03em.
- H2: 40–48px / 30px, weight 700, -0.02em. H3: 22px, weight 600.
- Body: 17–18px, line-height 1.55, weight 400. Small: 14px.
- Prices and numbers: tabular figures (font-variant-numeric: tabular-nums), weight 700, copper.

### Shape, spacing, elevation
- 8pt spacing grid; section vertical padding 96–128px desktop, 64px mobile.
- Container max-width 1200px, side padding 24px (16px on mobile).
- Radius: 12px inputs/chips, 20px cards, 28px large blocks, full pill for buttons.
- Elevation: 1px borders first; soft shadow 0 8px 24px rgba(20,22,26,0.06) only for raised cards.

### Components
- Primary button: copper fill, white text, pill, 56px tall, phone icon left.
- Secondary button: white surface, 1px border, WhatsApp green icon, ink text.
- Calculator chips: inline in the headline, copper dashed underline, editable on tap.
- Metal card: photo on subtle surface, name, price ₽/kg in copper, small "за кг".
- Inputs: 56px, 12px radius, visible labels above, copper focus ring.
- Icons: simple 1.5px line icons (Lucide style). No emoji.

### Motion
- 150–250ms ease-out for hovers and chip edits; price number counts up when the calculator changes.
- Sections fade/slide up 12px on first view. Respect prefers-reduced-motion.
