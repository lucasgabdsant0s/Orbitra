# English

# Orbitra - Project Management System

Multi-tenant project management system with clean architecture.

## Quick Start

### With Docker

```bash
# Clone the repository
git clone <repository-url>
cd Orbitra

# Start all services
docker-compose up -d

# Access
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

### Local Development

#### Backend

```bash
cd backend
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Project Structure

- `/backend` - Node.js API with Clean Architecture
- `/frontend` - React with TypeScript
- `/docker` - Docker configurations
- `/docs` - Documentation

## Technologies

- **Backend**: Node.js, TypeScript, Express, Prisma, PostgreSQL, Redis
- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **DevOps**: Docker, Docker Compose, Nginx

## Documentation

- [Architecture](./docs/architecture.md)
- [API Routes](./docs/api-routes.md)
- [Database](./docs/database.md)
- [UX Flows](./docs/ux-flows.md)

## License

MIT

# Português

# Orbitra - Sistema de Gerenciamento de Projetos

Sistema multi-tenant para gerenciamento de projetos com arquitetura limpa.

## Início Rápido

### Com Docker

```bash
# Clonar o repositório
git clone <repository-url>
cd Orbitra

# Iniciar todos os serviços
docker-compose up -d

# Acessar
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

### Desenvolvimento Local

#### Backend

```bash
cd backend
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Estrutura do Projeto

- `/backend` - Node.js API com Clean Architecture
- `/frontend` - React 
- `/docker` - Docker configurations
- `/docs` - Documentation

## Tecnologias

- **Backend**: Node.js, TypeScript, Express, Prisma, PostgreSQL, Redis
- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **DevOps**: Docker, Docker Compose, Nginx

## Documentação

- [Arquitetura](./docs/architecture.md)
- [Rotas da API](./docs/api-routes.md)
- [Banco de Dados](./docs/database.md)
- [Fluxos de UX](./docs/ux-flows.md)

## Licença

MIT
