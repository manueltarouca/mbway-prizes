import Database from 'better-sqlite3';
import moment from 'moment';

export default async function handler(req, res) {
  const db = new Database('./backend/db/mbway-prizes.sqlite', { readonly: true });
  const currentDates = [moment(new Date()).format('dd/mm/yyyy'), moment(new Date()).format('dd/mm/yyyy')];
  const tomorowDates = [moment(new Date()).add(1,'day').format('dd/mm/yyyy'), moment(new Date()).add(1,'day').format('dd/mm/yyyy')];
  const todayRows = db.prepare('SELECT * FROM prizes WHERE date IN (?, ?)').all(currentDates);
  const tomorowRows = db.prepare('SELECT * FROM prizes WHERE date IN (?, ?)').all(tomorowDates);
  return res.status(200).json({ today: todayRows, tomorow: tomorowRows });
}