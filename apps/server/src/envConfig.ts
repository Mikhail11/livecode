import { resolve } from 'path';
import * as dotenv from 'dotenv';

// Благодаря ConfigModule в AppModule env-переменные доступны внутри классов (ConfigModule становится injectable), но env недоступны в глобальной области видимости
// Поэтому используем dotenv - не злоупотреблять
const envPath = resolve(__dirname, '..', `.env.${process.env.NODE_ENV}`);

dotenv.config({ path: envPath });
