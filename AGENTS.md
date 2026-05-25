# AGENTS.md

## Project Scope

This is John Mannelly's personal site. The active public sections are:

- Home: `/`
- About: `/about`
- Writing: `/writing` and `/writing/rss`
- Projects: `/projects`
- Bookmarks: `/bookmarks`
- Bookshelf: `/bookshelf` and `/bookshelf/[slug]`

Do not reintroduce deleted sections such as App Dissection, Stack, old local writing detail pages, Liveblocks cursors, or unused podcast/timeline features unless the user explicitly asks for them.

## Implementation Rules

- Keep changes small and tied to the active site surface.
- Preserve Bookmarks as a static curated list in `src/data/bookmarks.ts`.
- Writing uses local data in `src/data/writing.ts` and links out to Medium.
- Bookshelf uses local data in `src/data/bookshelf.ts` and `src/data/bookshelfQuotes.ts`.
- Do not commit secrets. Required local secrets belong in `.env.local`.
- Prefer removing unused dependencies and files over adding new abstractions.

## Communication

- Explain completed work in plain, clear English.
- Avoid unnecessary jargon, implementation trivia, or code-heavy summaries in final responses.
- Define what done means before starting substantial work, then use that as the completion checklist.
- Verify work before reporting it as complete. If something fails, fix it and rerun the relevant check before handing it back.

## Verification

Before reporting a task as complete, run the most relevant checks:

- `yarn typecheck`
- `yarn lint`
- `yarn test`
- `yarn test:e2e`
- `yarn build`
- `yarn audit`

## Environment Variables

Newsletter signup uses:

- `MAILCHIMP_LIST_ID`
- `MAILCHIMP_API_KEY`

Analytics uses:

- `NEXT_PUBLIC_FATHOM_SITE_ID`
- `NEXT_PUBLIC_FATHOM_CUSTOM_URL`
