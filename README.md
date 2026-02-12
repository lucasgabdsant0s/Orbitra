# Orbitra - Multi-tenant Project Management SaaS

[![stars - orbitrav2](https://img.shields.io/github/stars/lucasgabdsant0s/Orbitra?style=flat-square&logo=github)](https://github.com/lucasgabdsant0s/Orbitra/stargazers)
[![forks - orbitrav2](https://img.shields.io/github/forks/lucasgabdsant0s/Orbitra?style=flat-square&logo=github)](https://github.com/lucasgabdsant0s/Orbitra/network/members)
[![license](https://img.shields.io/github/license/lucasgabdsant0s/Orbitra?style=flat-square)](LICENSE)
[![node-version](https://img.shields.io/badge/node-%3E%3D20-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org)
[![prisma-version](https://img.shields.io/badge/prisma-7.4.0-blue?style=flat-square&logo=prisma)](https://prisma.io)

Orbitra is a high-performance, multi-tenant project management platform built with **Clean Architecture** and **Domain-Driven Design**. Designed for the 2026 SaaS landscape, it offers strict tenant isolation, scalable database patterns, and a developer-first experience.

---

## Core Features

- **Multi-Tenancy**: Logical data isolation ensuring cross-tenant security.
- **Clean Architecture**: Domain-centric design for high testability and maintenance.
- **Secure Auth**: JWT with Refresh Tokens and industry-standard security practices.
- **Resource Management**: Complete lifecycle for Tenants, Users, Projects, and Tasks.
- **High Performance**: Built on Fastify with Zod for lightning-fast validation.
- **Soft Delete**: Data safety first with audit-friendly deletion patterns.
- **Rate Limiting**: Built-in protection against brute-force and DDoS.

## Tech Stack

| Layer          | Technology                                                                             |
| -------------- | -------------------------------------------------------------------------------------- |
| **Runtime**    | [Node.js v20+](https://nodejs.org/)                                                    |
| **Language**   | [TypeScript](https://www.typescriptlang.org/)                                          |
| **Framework**  | [Fastify v5+](https://fastify.io/)                                                     |
| **ORM**        | [Prisma v7+](https://www.prisma.io/)                                                   |
| **Database**   | [MariaDB / MySQL](https://mariadb.org/)                                                |
| **Validation** | [Zod v3+](https://zod.dev/)                                                            |
| **DevOps**     | [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) |

## Quick Start (Docker)

Get Orbitra up and running in less than 60 seconds:

```bash
# 1. Clone the repository
git clone https://github.com/lucasgabdsant0s/Orbitra.git
cd Orbitra

# 2. Setup environment (minimal config)
cp backend/.env.example backend/.env.development

# 3. Start services
docker compose -f compose.dev.yml up -d --build
```

> [!TIP]
> Once running, access the **Scalar API Reference** at `http://localhost:3333/docs`.

## Local Development Setup

If you prefer running without Docker:

1. **Prerequisites**: Node 20+, MariaDB/MySQL instance.
2. **Setup**:
   ```bash
   cd backend
   npm install
   cp .env.example .env
   ```
3. **Database**:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```
4. **Start**:
   ```bash
   npm run dev
   ```

## Project Structure

```text
.
├── backend/               # Main SaaS API (Node.js + TS)
│   ├── prisma/            # Database schema and migrations
│   └── src/               # Clean Architecture implementation
│       ├── application/   # Use Cases & Business Rules
│       ├── core/          # Entities & Interfaces
│       └── infra/         # External implementations (HTTP, Database)
├── .github/               # Workflows and CI/CD
└── compose.dev.yml        # Development orchestration
```

## Contributing

We love contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🇧🇷 Versão em Português

# Orbitra - SaaS de Gerenciamento de Projetos Multi-tenant

Orbitra é uma plataforma de gerenciamento de projetos multi-tenant de alto desempenho, construída com **Clean Architecture** e **Domain-Driven Design**. Projetada para o cenário SaaS de 2026, oferece isolamento estrito de tenants, padrões de banco de dados escaláveis e uma experiência focada no desenvolvedor.

## Funcionalidades Principais

-  **Multi-Tenancy**: Isolamento lógico de dados garantindo segurança cross-tenant.
-  **Clean Architecture**: Design centrado no domínio para alta testabilidade e manutenção.
-  **Auth Segura**: JWT com Refresh Tokens e práticas de segurança de padrão de mercado.
-  **Gestão de Recursos**: Ciclo completo para Tenants, Usuários, Projetos e Tarefas.
-  **Alta Performance**: Construído em Fastify com Zod para validação ultrarrápida.
-  **Soft Delete**: Segurança de dados com padrões de exclusão auditáveis.
-  **Rate Limiting**: Proteção nativa contra brute-force e DDoS.

## Início Rápido (Docker)

```bash
git clone https://github.com/lucasgabdsant0s/Orbitra.git
cd Orbitra
cp backend/.env.example backend/.env.development
docker compose -f compose.dev.yml up -d --build
```

Acesse a **Documentação Scalar** em `http://localhost:3333/docs`.

---

**Built with for the community by [Lucas Santos](https://github.com/lucasgabdsant0s)**
