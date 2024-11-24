// api routes to go here
import Cors from 'cors';

import mysql from 'mysql';

const db = mysql.createPool({
  host: 'localhost', 
  user: 'root', 
  password: '',
  database: 'BuyItByMe1',
});

export default db;