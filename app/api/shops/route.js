import { dbConnection } from "../../lib/db";
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