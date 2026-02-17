# Orbitra Backend Dockerfile

FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and generate prisma
COPY . .
RUN npx prisma generate --schema=./src/infra/database/prisma/schema.prisma

# Build the project
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/infra/database/prisma/schema.prisma ./src/infra/database/prisma/schema.prisma

# Railway automatically handles the PORT variable
EXPOSE 3333

CMD ["node", "dist/main.js"]
