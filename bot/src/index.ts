import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import Database from 'better-sqlite3';
import moment from 'moment';
import { PrizeRow } from './models/prize';

dotenv.config();
const db = new Database('../db/mbway-prizes.sqlite', { readonly: true });

const token = process.env.TG_API_TOKEN || 'token-test';
const userId = process.env.TG_USER_ID || 'some-user-id';
const bot = new TelegramBot(token);

const currentDate = moment(new Date()).format('d/M/yyyy');
const rows: PrizeRow[] = db.prepare('SELECT * FROM prizes WHERE date = ?').all(currentDate);

(async () => {
  for (let row of rows){
    const message = `${row.type} prize\nat: ${row.time}\nvalue: ${row.value}€`
    await bot.sendMessage(userId, message);
  }
})();

db.close();