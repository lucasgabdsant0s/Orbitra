```dockerfile
# Frontend Dockerfile for development
FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all code
COPY . .

# Expose Vite port
EXPOSE 5180

# Run dev server with host 0.0.0.0 to accept external connections
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```
