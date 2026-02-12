# Orbitra Backend - Core API

[![node-version](https://img.shields.io/badge/node-%3E%3D20-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org)
[![fastify-version](https://img.shields.io/badge/fastify-5.0.0-black?style=flat-square&logo=fastify)](https://fastify.io)
[![prisma-version](https://img.shields.io/badge/prisma-7.4.0-blue?style=flat-square&logo=prisma)](https://prisma.io)

This is the engine of the Orbitra platform. A robust, scalable, and secure API designed with **Clean Architecture** to handle complex multi-tenant project management workflows.

---

## Architecture Overview

Orbitra follows **Clean Architecture** principles to decouple the business logic from external concerns.

### Dependency Flow

```text
[ Infrastructure ] ⮕ [ Application ] ⮕ [ Core Domain ]
      ^                   ^                 ^
      │                   │                 │
(HTTP, Database)    (Use Cases)       (Entities, Interfaces)
```

| Layer              | Responsibility              | Rationale                                                                   |
| ------------------ | --------------------------- | --------------------------------------------------------------------------- |
| **Core**           | Domain Entities & Contracts | The heart of the system. Pure, dependency-free business logic.              |
| **Application**    | Use Cases                   | Orchestrates data flow between Core and Infra. Represents project features. |
| **Infrastructure** | Implementations             | External details: Prisma repositories, Fastify server, JWT, Bcrypt.         |

## Security & Multi-tenancy

### Multi-tenant Isolation

We use a **Logical Isolation** pattern. Every query is scoped by `tenantId` at the repository level.

```typescript
// Example Repository Pattern
async findById(tenantId: string, id: string): Promise<User | null> {
  const record = await prisma.user.findFirst({
    where: { id, tenantId, deletedAt: null }
  });
  return record ? this.mapToEntity(record) : null;
}
```

### Security Features

- **JWT Rotation**: Use of short-lived Access Tokens and secure Refresh Tokens.
- **Rate Limiting**: Protection enabled for sensitive endpoints (Auth).
- **Graceful Shutdown**: Handles `SIGTERM/SIGINT` to close database connections safely.

## API Routes

| Path             | Method      | Description                   | Auth   |
| ---------------- | ----------- | ----------------------------- | ------ |
| `/auth/register` | `POST`      | Register a new Tenant + Owner | Public |
| `/auth/login`    | `POST`      | Login & Token Generation      | Public |
| `/auth/refresh`  | `POST`      | Refresh Access Token          | Public |
| `/users`         | `GET/PATCH` | User Management               | Bearer |
| `/projects`      | `ALL`       | Project Lifecycle             | Bearer |
| `/tasks`         | `ALL`       | Task Management               | Bearer |

## Performance Optimizations

- **Zod Validation**: Input data is validated and typed at runtime with zero overhead.
- **Prisma 7 Driver Adapters**: Optimized MariaDB/MySQL connections with better engine performance.
- **Singleton Pattern**: DI Container reuses database instances across the app.

## Deployment

1. **Environment**: Ensure `DATABASE_URL` and `JWT_SECRET` are set.
2. **Build**: `npm run build`
3. **Database**: `npx prisma migrate deploy`
4. **Start**: `npm run start`

Recommended platforms: **Railway**, **Render**, or **DigitalOcean App Platform**.

---

## 🇧🇷 Versão em Português

# Orbitra Backend - Core API

Este é o motor da plataforma Orbitra. Uma API robusta, escalável e segura projetada com **Clean Architecture** para lidar com fluxos complexos de gerenciamento de projetos multi-tenant.

## Visão Geral da Arquitetura

O Orbitra segue os princípios da **Arquitetura Limpa** para desacoplar a lógica de negócio das preocupações externas.

- **Core**: Entidades e Contratos (O coração do sistema).
- **Application**: Casos de Uso (Orquestração das funcionalidades).
- **Infrastructure**: Implementações (Fastify, Prisma, JWT, Bcrypt).

## Segurança e Multi-tenancy

- **Isolamento de Tenant**: Todo acesso a dados é filtrado logicamente por `tenantId`.
- **Rotação de JWT**: Tokens de acesso de curta duração e Refresh Tokens seguros.
- **Rate Limiting**: Proteção nativa para evitar abusos na API.

## Rotas da API

Acesse `http://localhost:3333/docs` para a documentação interativa completa (Scalar/Swagger).

---

**Built by [Lucas Santos](https://github.com/lucasgabdsant0s)**
