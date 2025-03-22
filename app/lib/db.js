// this is lib/db.js
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
 
// this is app/api/shops/route.js
import { dbConnection } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await dbConnection()
    const sql = "SELECT * FROM shops"
    const [shops] = await db.query(sql)

    console.log("shops fetched:", shops);

    if (shops.length === 0 ){
      return NextResponse.json({ error: "No Shops Found"})
    }

    return NextResponse.json(shops)
  } catch(error) {
    console.log(error)
    return NextResponse.json({error: error.message})
  }
};