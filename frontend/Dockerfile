# Frontend Dockerfile para desenvolvimento
FROM node:20-alpine

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código
COPY . .

# Expõe porta do Vite
EXPOSE 5173

# Roda dev server com host 0.0.0.0 para aceitar conexões externas
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
