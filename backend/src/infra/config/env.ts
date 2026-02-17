import 'dotenv/config';
interface EnvConfig {
  NODE_ENV: string;
  PORT: number;
  DATABASE_HOST: string | undefined;
  DATABASE_USER: string | undefined;
  DATABASE_PASSWORD: string | undefined;
  DATABASE_NAME: string | undefined;
  DATABASE_PORT: number | undefined;
  DATABASE_URL: string | undefined;
  MYSQL_URL: string | undefined;
  JWT_SECRET: string;
  JWT_REFRESH_SECRET: string;
  JWT_EXPIRES_IN: string;
  JWT_REFRESH_EXPIRES_IN: string;
}
function getEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Variável de ambiente "${key}" não definida.`);
  }
  return value;
}
export const env: EnvConfig = {
  NODE_ENV: getEnv('NODE_ENV', 'development'),
  PORT: Number(getEnv('PORT', '3333')),
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_PORT: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : undefined,
  DATABASE_URL: process.env.DATABASE_URL,
  MYSQL_URL: process.env.MYSQL_URL,
  JWT_SECRET: getEnv('JWT_SECRET'),
  JWT_REFRESH_SECRET: getEnv('JWT_REFRESH_SECRET'),
  JWT_EXPIRES_IN: getEnv('JWT_EXPIRES_IN', '15m'),
  JWT_REFRESH_EXPIRES_IN: getEnv('JWT_REFRESH_EXPIRES_IN', '7d'),
};
