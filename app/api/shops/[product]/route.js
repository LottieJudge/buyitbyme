import { dbConnection } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(request, context){
  const params = await context.params
  const { product } = params; 
  console.log("Params:", params);
  // try catch for error handling (not tdd but we move for now)
  try {
    const db = await dbConnection();
    const sql = "SELECT * FROM products WHERE name LIKE ?";
    const [products] = await db.query(sql, [`%${product}%`]);

    if (products.length === 0){
      return NextResponse.json({error:'No products found!'}, {status: 404})
    } return NextResponse.json(products)
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: error.message}, { status:500 })
  }
}