import { NextRequest } from "next/server";
import db from "@/app/config/db";

export async function GET(request: NextRequest) {
  return Response.json(await db.table('stock_barang'));
}