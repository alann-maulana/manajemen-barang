import { NextRequest } from "next/server";
import db from "@/app/config/db";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const filter = new Map<string, string>();

  const kode = searchParams.get('kode') || undefined;
  if (kode) filter.set('mb.kode', kode);

  const kategori = searchParams.get('kategori') || undefined;
  if (kategori) filter.set('mb.id_kategori', kategori);

  const nama = searchParams.get('nama') || undefined;
  if (nama) filter.set('mb.nama', nama);

  const satuan = searchParams.get('satuan') || undefined;
  if (satuan) filter.set('mb.satuan', satuan);

  const tanggal = searchParams.get('tanggal') || undefined;
  if (tanggal) filter.set('mb.tanggal', tanggal);

  const stock = searchParams.get('stock') || undefined;
  if (stock) filter.set('mb.stock', stock);

  const result = await getMasterBarang(filter);

  return Response.json(result);
}

async function getMasterBarang(filter: Map<string, string>) {
  const query = db.table('master_barang as mb')
    .join('master_kategori as mk', 'mk.id', 'mb.id_kategori')
    .select(
      'mb.id',
      'mb.kode',
      'mb.nama',
      'mb.tanggal',
      'mk.nama as kategori',
      'mb.satuan',
      'mb.stock',
      'mb.keterangan',
    )
    .where((cond) => {
      if (filter && filter.size > 0) {
        filter.forEach((value, key) => {
          if (key === 'mb.tanggal') {
            const dates = value.split('~');
            cond.whereBetween(key, [dates[0], dates[1]]);
          } else {
            cond.where(key, '=', value);
          }
        });
      }
    })
    ;

  try {
    return await query;
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
}