import { shopConnection } from "../../../lib/db";
import { NextResponse } from "next/server";

export default async function GET() {
  try {
    const db = await shopConnection()
    const sql = "SELECT * FROM shops"
    const [shops] = await db.query(sql)
    return NextResponse.json(posts)
  } catch(error) {
    console.log(error)
    return NextResponse.json({error: error.message})
  }
};