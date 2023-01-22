import Database from 'better-sqlite3';
import moment from 'moment';

export default async function handler(req: any, res: any) {
  const db = new Database('./backend/db/mbway-prizes.sqlite', { readonly: true });
  const currentDates = [moment(new Date()).format('DD/MM/yyyy'), moment(new Date()).format('DD/MM/yyyy')];
  const tomorowDates = [moment(new Date()).add(1,'day').format('DD/MM/yyyy'), moment(new Date()).add(1,'day').format('DD/MM/yyyy')];
  const todayRows = db.prepare('SELECT * FROM prizes WHERE date IN (?, ?)').all(currentDates);
  const tomorowRows = db.prepare('SELECT * FROM prizes WHERE date IN (?, ?)').all(tomorowDates);
  console.log(todayRows)
  console.log(tomorowRows)
  return res.status(200).json({ today: todayRows, tomorow: tomorowRows });
}