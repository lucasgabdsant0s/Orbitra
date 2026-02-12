# Docker Compose - Desenvolvimento Orbitra

Este arquivo configura todos os serviços necessários para rodar o Orbitra em ambiente de desenvolvimento com Docker.

## Serviços

- **db**: MySQL 8.0 (porta 3309)
- **api**: Backend Node.js (porta 3333)
- **frontend**: Frontend React + Vite (porta 5173)

## Como Usar

### Iniciar todos os serviços

```bash
docker-compose -f compose.dev.yml up --build
```

### Parar os serviços

```bash
docker-compose -f compose.dev.yml down
```

### Ver logs

```bash
# Todos os serviços
docker-compose -f compose.dev.yml logs -f

# Apenas frontend
docker-compose -f compose.dev.yml logs -f frontend

# Apenas backend
docker-compose -f compose.dev.yml logs -f api
```

### Rebuild após mudanças

```bash
docker-compose -f compose.dev.yml up --build --force-recreate
```

## Acessar o App

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3333
- **MySQL**: localhost:3309

## Troubleshooting

### Frontend não carrega

- Aguarde o npm install terminar (pode levar 1-2 minutos na primeira vez)
- Verifique logs: `docker-compose -f compose.dev.yml logs frontend`

### Erro de conexão com database

- Aguarde o MySQL inicializar completamente (~30 segundos)
- Verifique se as credenciais no `.env.development` estão corretas

### Hot reload não funciona

- O `CHOKIDAR_USEPOLLING=true` já está configurado para Windows/WSL
- Se ainda não funcionar, tente rebuild: `docker-compose -f compose.dev.yml up --build`
