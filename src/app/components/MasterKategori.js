'use client';
import { useState } from 'react';
import FilterComponent from './FilterComponent';
import useSWR from 'swr';
import { fetcher } from '../config/rest';
import { DataGrid } from '@mui/x-data-grid';

export default function MasterKategori() {
  const { data, error, isLoading } = useSWR('/api/master-kategori', fetcher);

  const columns = [
    { field: 'kode', headerName: 'KODE KATEGORI BARANG', width: 300 },
    { field: 'nama', headerName: 'NAMA KATEGORI BARANG', width: 400 },
    { field: 'keterangan', headerName: 'KETERANGAN', width: 500, sortable: false, }
  ];

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Master Kategori Barang</h2>
      </div>

      <DataGrid
        rows={data}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        autoHeight />
    </div>
  );
}