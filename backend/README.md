# Orbitra Backend

The powerful, clean-architecture API powering Orbitra — a multi-tenant SaaS project manager.

## Features

- Multi-tenancy with data isolation
- JWT + Refresh Token authentication
- Full CRUD for Tenants, Users, Projects, Tasks
- Soft-delete support
- Rate limiting & brute-force protection
- Zod schema validation
- Prisma + MariaDB/MySQL
- Integration tests with Vitest

## Tech Stack

- Fastify
- TypeScript
- Prisma ORM
- Zod
- JWT
- Vitest + supertest

## Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your DB credentials
docker compose up -d db  # or use your local DB
npx prisma migrate dev
npm run dev
API runs at http://localhost:3333
```

## Docker

Included in root docker-compose.yml — just docker compose up -d
Testing
```Bash
npm run test:integration
```

## API Documentation

The API is fully documented and ready to use:

Swagger UI: http://localhost:3333/docs

### All endpoints are secured with JWT where required. Authentication flows:

```text
POST /auth/register → creates tenant + owner user
POST /auth/login → returns accessToken + refreshToken
Use Authorization: Bearer <accessToken> for protected routes
```
### Endpoints overview:
```text
/auth/* – Authentication
/tenants – Workspaces/Organizations
/projects – Projects CRUD
/tasks – Tasks CRUD + status updates
Rate limiting & security headers enabled
```

## Folder Structure

```text
src/
├── application/      # Use cases & business rules
├── core/             # Entities, DTOs, interfaces
├── infra/            # HTTP (Fastify), Database (Prisma), Config
└── __tests__/        # Integration tests
```

### Clean Architecture layers → high testability & maintainability.
Happy coding!

