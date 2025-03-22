import mysql from "mysql2/promise"

let connection;

export const dbConnection = async () => {
  if(!connection) {
        connection = await mysql.createConnection({
          host: process.env.MYSQL_HOST,
          user: process.env.MYSQL_USER,
          password: process.env.MYSQL_PASSWORD,
          database: process.env.MYSQL_DATABASE 
        })
      }
      return connection
    };
