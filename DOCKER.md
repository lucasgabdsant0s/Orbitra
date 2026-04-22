# Docker Compose - Orbitra Development

This file configures all the services required to run Orbitra in a development environment using Docker.

## Services

- **db**: MySQL 8.0 (port 3309)
- **api**: Node.js Backend (port 3333)
- **frontend**: React + Vite Frontend (port 5173)

## How to Use

### Start all services

```bash
docker-compose -f compose.dev.yml up --build
```

### Stop services

```bash
docker-compose -f compose.dev.yml down
```

### View logs

```bash
# All services
docker-compose -f compose.dev.yml logs -f

# Frontend only
docker-compose -f compose.dev.yml logs -f frontend

# Backend only
docker-compose -f compose.dev.yml logs -f api
```

### Rebuild after changes

```bash
docker-compose -f compose.dev.yml up --build --force-recreate
```

## Access the App

- **Frontend**: http://localhost:5180
- **Backend API**: http://localhost:3333
- **MySQL**: localhost:3309
- **API Documentation**: http://localhost:3333/docs

## Troubleshooting

### Frontend not loading

- Wait for npm install to finish (may take 1-2 minutes the first time)
- Check logs: `docker-compose -f compose.dev.yml logs frontend`

### Database connection error

- Wait for MySQL to fully initialize (~30 seconds)
- Verify if credentials in `.env.development` are correct
- run: `docker exec orbitra-api-1 npx prisma db push --force-reset --accept-data-loss`

### Hot reload not working

- `CHOKIDAR_USEPOLLING=true` is already configured for Windows/WSL
- If it still doesn't work, try rebuilding: `docker-compose -f compose.dev.yml up --build`
