'use client';
import { SetStateAction, useState } from 'react';
import FilterComponent from './FilterComponent';
import useSWR from 'swr';
import { fetcher } from '../config/rest';
import { DataGrid } from '@mui/x-data-grid';

interface FilterBarang {
  kode: string | null;
  kategori: number | null;
  nama: string | null;
  satuan: string | null;
  tanggal: string | null;
  stock: number | null;
}

const paginationModel = { page: 0, pageSize: 10 };

export default function MasterBarang() {
  const [filters, setFilters] = useState<FilterBarang>({
    kode: null,
    kategori: null,
    nama: null,
    satuan: null,
    tanggal: null,
    stock: null,
  });
  const [showFilter, setShowFilter] = useState(false);
  const { data, error, isLoading } = useSWR(() => {
    const query = new URLSearchParams();
    if (filters.kode) query.set('kode', filters.kode);
    if (filters.kategori) query.set('kategori', `${filters.kategori}`);
    if (filters.nama) query.set('nama', filters.nama);
    if (filters.satuan) query.set('satuan', filters.satuan);
    if (filters.tanggal) query.set('tanggal', filters.tanggal);
    if (filters.stock) query.set('stock', `${filters.stock}`);

    return `/api/master-barang?${query.toString()}`;
  }, fetcher);

  const handleFilter = (updatedFilters: SetStateAction<FilterBarang>) => {
    setFilters(updatedFilters);
  };

  const columns = [
    { field: 'kode', type: 'text', headerName: 'Kode Barang', sortable: true, width: 150 },
    { field: 'nama', type: 'text', headerName: 'Nama Barang', sortable: true, width: 200 },
    { field: 'tanggal', type: 'daterange', headerName: 'Tanggal Pembuatan', sortable: true, width: 150 },
    { field: 'kategori', type: 'dropdown#master_kategori', headerName: 'Kategori', sortable: true, width: 200 },
    { field: 'satuan', type: 'text', headerName: 'Satuan', sortable: true, width: 100 },
    { field: 'stock', type: 'dropdown#stock', headerName: 'Ada Stock', sortable: true, width: 100 },
    { field: 'keterangan', headerName: 'Keterangan', sortable: false, width: 400 }
  ];

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Master Barang</h2>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Filter
        </button>
      </div>

      {showFilter && <FilterComponent fields={columns} filters={filters} handleFilter={handleFilter} />}

      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20]}
        autoHeight />
    </div>
  );
}