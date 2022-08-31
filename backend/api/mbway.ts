import Database from 'better-sqlite3';
import moment from 'moment';
import fs from 'fs'

export default async function handler(req, res) {
  const db = new Database('./backend/db/mbway-prizes.sqlite', { readonly: true });
  const currentDates = [moment(new Date()).format('D/M/yyyy'), moment(new Date()).format('D/MM/yyyy')];
  const tomorowDates = [moment(new Date()).add(1,'day').format('D/M/yyyy'), moment(new Date()).add(1,'day').format('D/MM/yyyy')];
  const todayRows = db.prepare('SELECT * FROM prizes WHERE date IN (?, ?)').all(currentDates);
  const tomorowRows = db.prepare('SELECT * FROM prizes WHERE date IN (?, ?)').all(tomorowDates);
  return res.status(200).json({ today: todayRows, tomorow: tomorowRows });
}