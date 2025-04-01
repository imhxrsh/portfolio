# Portfolio Website

A sleek, performant portfolio built with:

- Next.js 15 (App Router)
- TypeScript
- Shadcn/ui (Radix + TailwindCSS)
- Bun (or npm/yarn)

## Features

**Modern Stack**

- Next.js App Router
- TypeScript
- TailwindCSS with CSS variables
- Shadcn/ui components

**Theming**

- Light/dark mode (via `theme-provider.tsx`)
- Animated transitions

**Responsive**

- Mobile-first design
- Custom hooks (`use-mobile.tsx`)
- Adaptive layouts

**Structured Components**

- Project cards (`project-card.tsx`)
- Experience timeline (`experience-card.tsx`)
- Education section (`education-card.tsx`)

## Setup

### With Bun (recommended)

```bash
bun install
bun dev
```

### With npm/yarn

```bash
npm install
npm run dev

or

yarn install
yarn dev
```

## Project Structure

```
app/
  fonts/           # Custom fonts
  globals.css      # Global styles
components/
  ui/             # Shadcn/ui components
  *-card.tsx      # Portfolio-specific cards
public/           # Static assets
styles/           # CSS files
```

## Customization

1. **Profile Images**:
   Replace `public/profile.jpg` and other placeholders

2. **Theme Colors**:
   Edit `tailwind.config.ts` to change the color scheme

3. **Content**:
   Update the cards in `/components` with your projects/experience

## Credits

This project uses these major dependencies:

- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Radix UI](https://www.radix-ui.com/) - Primitives
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Next.js](https://nextjs.org/) - Framework

## License

MIT © 2025 Harsh Vishwakarma - See [LICENSE](./LICENSE) for details.
