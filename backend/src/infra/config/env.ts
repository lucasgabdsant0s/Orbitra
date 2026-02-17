import 'dotenv/config';
interface EnvConfig {
  NODE_ENV: string;
  PORT: number;
  DATABASE_HOST: string;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_NAME: string;
  DATABASE_PORT: number;
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
  DATABASE_HOST: getEnv('DATABASE_HOST'),
  DATABASE_USER: getEnv('DATABASE_USER'),
  DATABASE_PASSWORD: getEnv('DATABASE_PASSWORD'),
  DATABASE_NAME: getEnv('DATABASE_NAME'),
  DATABASE_PORT: Number(getEnv('DATABASE_PORT', '3306')),
  JWT_SECRET: getEnv('JWT_SECRET'),
  JWT_REFRESH_SECRET: getEnv('JWT_REFRESH_SECRET'),
  JWT_EXPIRES_IN: getEnv('JWT_EXPIRES_IN', '15m'),
  JWT_REFRESH_EXPIRES_IN: getEnv('JWT_REFRESH_EXPIRES_IN', '7d'),
};
