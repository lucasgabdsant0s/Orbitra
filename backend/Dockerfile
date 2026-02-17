FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

COPY src/infra/database/prisma ./src/infra/database/prisma

RUN npm install

COPY . .

RUN npx prisma generate --schema=./src/infra/database/prisma/schema.prisma

RUN npm run build

FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/infra/database/prisma ./src/infra/database/prisma
COPY package*.json ./

ENV NODE_ENV=production

EXPOSE 3333

CMD ["node", "dist/main.js"]
