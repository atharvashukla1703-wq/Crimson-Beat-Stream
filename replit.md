# SoundWave

A full-stack music streaming app where users can upload tracks, discover music, build playlists, and stream audio with a sleek black/red theme.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/music-app run dev` — run the frontend (port 19938)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL`, `DEFAULT_OBJECT_STORAGE_BUCKET_ID`, `SESSION_SECRET`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, TailwindCSS v4, shadcn/ui, Wouter routing
- API: Express 5 with OIDC Replit Auth
- DB: PostgreSQL + Drizzle ORM
- Storage: Replit Object Storage (GCS presigned URLs)
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/music-app/src/` — React frontend
  - `pages/` — home, discover, library, upload, playlists, playlist-detail
  - `components/` — layout, player, track-card, add-to-playlist-dialog
  - `hooks/` — use-player (audio context)
- `artifacts/api-server/src/` — Express API
  - `routes/` — auth, storage, tracks, playlists, stats
- `lib/db/src/schema/` — Drizzle schema (tracks, playlists, playlist_tracks)
- `lib/api-client-react/src/generated/` — Orval-generated React Query hooks + Zod schemas
- `lib/replit-auth-web/` — useAuth hook for frontend
- `lib/object-storage-web/` — object storage client for frontend

## Architecture decisions

- Contract-first API: OpenAPI spec → Orval codegen → React Query hooks + Zod schemas used on both client and server
- Auth via Replit OIDC (PKCE) — session stored in signed cookies, no JWTs
- Audio served via presigned GCS URLs through `/api/storage` proxy
- Player state lives in a React context (`PlayerProvider`) wrapping the entire app
- Track likes are stored as a boolean on the track (per-user not needed for MVP)

## Product

- **Landing**: marketing page with Sign In CTA
- **Discover**: search, genre filters, most-played and recently-added feeds, library stats
- **Library**: user's own uploaded tracks with delete capability
- **Upload**: multi-step upload (audio + cover art via presigned URL → track record creation)
- **Playlists**: create/delete playlists, add/remove tracks
- **Player**: persistent bottom bar with play/pause, prev/next, seek, volume, like

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Run `pnpm --filter @workspace/api-spec run codegen` after changing the OpenAPI spec
- Run `pnpm --filter @workspace/db run push` after changing the DB schema
- Libs must be composite (`composite: true` in tsconfig) to be referenced by artifact packages
- `lib/replit-auth-web` must NOT use `import.meta.env` — it's compiled as a composite lib without Vite types

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
