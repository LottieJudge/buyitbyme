import { shopConnection } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await shopConnection()
    const sql = "SELECT * FROM shops"
    const [shops] = await db.query(sql)

    console.log("shops fetched:", shops);

    if (shops.length === 0 ){
      return NextResponse.json({ error: "No Shops Fam"})
    }

    return NextResponse.json(shops)
  } catch(error) {
    console.log(error)
    return NextResponse.json({error: error.message})
  }
};