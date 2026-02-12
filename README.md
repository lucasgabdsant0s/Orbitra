# Orbitra

> Sistema de gestão de projetos multi-tenant estilo Trello

## Estrutura do Projeto

```
Orbitra/
├── backend/          # API Node.js + TypeScript + Prisma
└── frontend/         # React 18 + TypeScript + Vite
```

## Rodando Localmente

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend rodará em **http://localhost:3333**

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend rodará em **http://localhost:5173**

## Stack

### Backend

- Node.js + TypeScript
- Express
- Prisma ORM
- MySQL/PostgreSQL
- JWT Authentication

### Frontend

- React 18 + TypeScript
- Vite 7
- TanStack Query v5
- Zustand
- Tailwind CSS + shadcn/ui
- Framer Motion
- @dnd-kit (Drag & Drop)

## Documentação

- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)

## Features

✅ Autenticação (JWT)
✅ Multi-tenancy
✅ CRUD de Projetos
✅ Kanban Board com Drag & Drop
✅ Dark Mode
✅ Animações e feedback visual

---

Desenvolvido para demonstrar arquitetura limpa e melhores práticas 2026.
