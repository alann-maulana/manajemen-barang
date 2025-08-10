'use client';
import useSWR from 'swr';
import { fetcher } from '../config/rest';
import { DataGrid } from '@mui/x-data-grid';

const paginationModel = { page: 0, pageSize: 10 };

export default function StockBarang() {
    const { data, error, isLoading } = useSWR('/api/stock-barang', fetcher);

    const columns = [
        { field: 'nama_barang', headerName: 'NAMA BARANG', width: 300 },
        { field: 'kategori', headerName: 'KATEGORI BARANG', width: 200 },
        { field: 'stock', headerName: 'STOCK', width: 100, },
        { field: 'satuan', headerName: 'SATUAN', width: 200, },
    ];

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">Stock Barang</h2>
            </div>

            <DataGrid
                rows={data}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 20]}
                autoHeight />
        </div>
    );
}