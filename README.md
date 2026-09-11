# DukaanDost

A mobile-first shopkeeper app for taking orders, tracking deliveries, managing customer credit accounts (khata), and keeping a rate list — with a "Pasand" (preference) feature that remembers what a customer means when they order "wahi wala sabun" (the usual soap).

This is a React + TypeScript implementation of the `DukaanDost` design in `design/`, which was handed off from Claude Design. It's a frontend-only build: all data (orders, customers, rates, purchase history) is in-memory mock data, with no backend or persistence — state resets on reload.

## Screens

- **Login** — Google sign-in placeholder
- **Home** — today's order/delivery counts and navigation tiles
- **Naye Orders** — new orders, with a "Pasand" guess panel for vague items ("wahi wala sabun") that can be confirmed or corrected
- **Order Tracking** — pending vs. delivered orders, toggle delivery status
- **Grahak Khata** — customer list with amounts due
- **Customer detail** — dues, saved preferences ("Iski Pasand"), payment history, record a payment
- **Rate List** — shop's item rates, add/edit items, mock photo/file upload

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run lint      # oxlint
```

## Project layout

- `src/data.ts` — seed data (orders, customers, rate items, preference catalog)
- `src/types.ts` — shared TypeScript types
- `src/App.tsx` — app state and screen routing
- `src/screens/` — one component per screen/sheet
- `src/components/` — shared UI (shell, top bar, bottom nav, bottom sheet, toast, icons)
- `design/` — the original Claude Design handoff bundle (chat transcript + HTML/JS prototype) this build was implemented from
