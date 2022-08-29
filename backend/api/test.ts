import Database from 'better-sqlite3';
import moment from 'moment';

export default async function handler(req, res) {
  const db = new Database('../db/mbway-prizes.sqlite', { readonly: true });
  const currentDate = moment(new Date()).format('d/M/yyyy');
  const rows = db.prepare('SELECT * FROM prizes WHERE date = ?').all(currentDate);
  return res.status(200).json({ items: rows });
}