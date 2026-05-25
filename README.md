# John Mannelly Personal Site

This is the codebase for [johnmannelly.com](https://johnmannelly.com).

## Active Sections

- Home
- About
- Writing
- Projects
- Bookmarks
- Bookshelf

The codebase is intentionally scoped to those sections. Bookmarks is a static curated list stored in local data.

## Getting Started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open `http://localhost:3000`.

## Environment

Create `.env.local` for local development.

Newsletter signup needs:

```bash
MAILCHIMP_LIST_ID=
MAILCHIMP_API_KEY=
```

Analytics is optional locally:

```bash
NEXT_PUBLIC_FATHOM_SITE_ID=
NEXT_PUBLIC_FATHOM_CUSTOM_URL=
```

## Scripts

```bash
yarn dev        # Start local development
yarn build      # Build for production
yarn start      # Start the production build
yarn typecheck  # Check TypeScript
yarn lint       # Run ESLint
yarn test       # Run unit tests
yarn test:e2e   # Run Playwright browser tests
yarn test:all   # Run typecheck, unit tests, and browser tests
```

## Testing

Unit tests cover local writing and bookshelf data. Browser tests cover the active public pages, the static Bookmarks page, Bookshelf detail pages, removed routes returning 404, and old bookmark category URLs redirecting to `/bookmarks`.
