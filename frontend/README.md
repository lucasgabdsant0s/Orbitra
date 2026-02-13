# Orbitra Frontend

Modern, responsive React frontend for Orbitra — beautiful, fast, and delightful to use.

## Features

- Drag & drop Kanban boards (@dnd-kit)
- Undo support on critical actions (Sonner toasts)
- Dark mode + theme toggle
- Optimistic updates & instant feedback (TanStack Query)
- Beautiful empty/error/loading states
- Protected routes & auth flow

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui + Radix UI
- Framer Motion
- TanStack Query + Zustand
- Sonner
- @dnd-kit
- Recharts
- react-hook-form + zod
- lucide-react

## Setup

```bash
cd frontend
npm install
npm run dev
Runs at http://localhost:5173
(Proxy to backend at /api → http://localhost:3333)
```

## Docker

Included in root docker-compose.yml — just docker compose up -d

Folder Structure
```text
src/
├── app/              # Routes & layouts
├── components/       # Shared UI
├── features/         # Feature slices (auth, dashboard, tasks/kanban…)
├── hooks/            # Custom hooks
├── lib/              # api client, utils
├── stores/           # Zustand stores
├── providers/        # Global providers
└── types/            # Shared types
```

### Feature-first + separation of concerns = scalable & maintainable.

## UX Highlights

Smooth Framer Motion transitions
Skeleton loaders everywhere
Sonner toasts + undo
Mobile-first responsive design

Enjoy building!
