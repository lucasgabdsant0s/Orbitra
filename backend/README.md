# Orbitra Backend - Core API

[![node-version](https://img.shields.io/badge/node-%3E%3D20-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org)
[![fastify-version](https://img.shields.io/badge/fastify-5.0.0-black?style=flat-square&logo=fastify)](https://fastify.io)
[![prisma-version](https://img.shields.io/badge/prisma-7.4.0-blue?style=flat-square&logo=prisma)](https://prisma.io)
[![test-suite](https://img.shields.io/badge/test--suite-jest-orange?style=flat-square&logo=jest)](https://jestjs.io)

This is the central engine of the **Orbitra** ecosystem. It provides the high-performance, multi-tenant infrastructure required for 2026-standard project management.

---

## 🏛️ Architecture & Design Patterns

The backend is built using **Clean Architecture** and **Domain-Driven Design (DDD)** principles. This ensures that the heart of the application remains isolated from external drivers (like databases or web frameworks).

### Layered Structure

```mermaid
graph TD
    subgraph "Infrastructure Layer"
        HTTP[Fastify / REST]
        PRISMA[Prisma ORM / MySQL]
        PROV[Third-party Providers]
    end

    subgraph "Application Layer"
        UC[Use Cases]
        CONT[Dependency Container]
    end

    subgraph "Core/Domain Layer"
        ENT[Entities]
        REP[Repository Interfaces]
    end

    HTTP --> UC
    UC --> ENT
    UC --> REP
    REP -.-> PRISMA
```

- **Core**: Contains pure domain entities and repository interfaces. No external dependencies.
- **Application**: Implements specific use cases (logic flows). Orchestrates repositories and entities.
- **Infrastructure**: Concrete implementations of repositories (Prisma), HTTP server (Fastify), and external helpers (JWT, Bcrypt).

## 🛡️ Security & Multi-tenancy

### Multi-tenant Data Isolation

Orbitra implements a strict **Logical Isolation** strategy. Every repository method is required to accept a `tenantId`, ensuring users never cross-leak data.

```typescript
// Strict isolation in repositories
async findById(tenantId: string, id: string): Promise<User | null> {
  return await prisma.user.findFirst({
    where: { id, tenantId, deletedAt: null }
  });
}
```

### Security Stack

- **JWT (JSON Web Tokens)**: Secure stateless authentication with Access and Refresh tokens.
- **2FA (Two-Factor Authentication)**: Built-in support for TOTP via authenticator apps.
- **Bcrypt**: State-of-the-art password hashing.
- **Rate Limiting**: Integrated protection against brute-force attacks on auth endpoints.

## 🚀 Key Features

- **Multi-Tenant Context**: Automatic extraction of `tenantId` from headers or JWT.
- **Soft Delete**: All main entities support `deletedAt`, preventing accidental data loss.
- **Audit Logs**: Automatic tracking of changes to Projects, Tasks, and Users.
- **Schema Validation**: 100% type-safety using **Zod** for request/response bodies.

## 🧪 Automated Testing

Orbitra has a comprehensive integration testing suite powered by **Vitest** and **Supertest**, running against a real MariaDB test database via Docker and Prisma.

### Testing Infrastructure

- **Real DB, Isolated per run**: Integration tests talk to a dedicated MariaDB container defined in `docker-compose.test.yml` on port `3307`.
- **Prisma + MariaDB Adapter**: The Prisma client uses `@prisma/adapter-mariadb` with a separate `.env.test` configuration (for example `DATABASE_URL=mysql://dev:dev123@localhost:3307/orbitra_test?...`).
- **Robust Setup/Cleanup**: `src/__tests__/setup.ts` connects to the DB with retry logic and clears all Prisma models using `deleteMany` in a single transaction before each test.
- **HTTP-level Tests**: Suites under `src/__tests__/infra/http/routes/*.integration.test.ts` use `supertest` against a Fastify instance created by `buildServer`.

### How to Run Tests

```bash
cd backend

# Run full integration test suite (starts MariaDB test container,
# applies schema, and runs Vitest in-band for DB safety)
npm run test:integration

# Unit tests / fast checks (no Docker required)
npm test

# Coverage report (unit + integration)
npm run test:coverage
```

### Integration Test Flow

```mermaid
sequenceDiagram
    participant V as Vitest
    participant S as Fastify Server
    participant P as Prisma Client
    participant M as MariaDB (Docker)

    V->>S: buildServer() + ready()
    V->>P: $connect() with retry
    V->>P: clearDatabase() (transaction deleteMany)
    V->>S: HTTP request (e.g. POST /auth/login)
    S->>P: Prisma query (tenant/user scoped)
    P->>M: SQL over MariaDB adapter
    M-->>P: Rows / Result
    P-->>S: Domain entities / DTOs
    S-->>V: HTTP response (status + body)
    V-->>V: Assertions (status, schema, side-effects)
```

## 🛠️ Local Development

1. **Install Dependencies**: `npm install`
2. **Environment**: `cp .env.example .env`
3. **Database Setup**:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```
4. **Run Dev Mode**: `npm run dev`

---

## 🇧🇷 Versão em Português

O backend do Orbitra é o motor principal da plataforma, construído focando em performance, escalabilidade e arquitetura limpa.

### Principais Diferenciais

- **Isolamento de Dados**: Todo acesso ao banco é filtrado por `tenantId`.
- **Arquitetura Limpa**: Regras de negócio separadas de frameworks.
- **Testes de Integração**: Suíte robusta cobrindo fluxos críticos (Auth, Projects, Tasks).
- **Documentação Scalar**: Acesse `/docs` para uma referência interativa da API.

---

**Crafted with excellence for the community.**
