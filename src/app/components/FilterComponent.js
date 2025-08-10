'use client';
import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../config/rest';

export default function FilterComponent({ fields, filters, handleFilter }) {
  const [filter, setFilter] = useState(filters);
  const [start, setStart] = useState(filters['tanggal']?.split('~')[0] | "");
  const [end, setEnd] = useState(filters['tanggal']?.split('~')[1] | "");
  const kategori = useSWR('/api/master-kategori', fetcher);

  const handleChange = (e, field) => {
    setFilter({
      ...filter,
      [field]: e.target.value
    });
  };

  useState(() => {
    console.log('filters', filters)
  })

  return (
    <div className="mb-4 p-4 bg-gray-100 rounded">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fields
          .filter(field => field.sortable)
          .map(field => (
            <div key={field.field}>
              <label className="block text-sm font-medium mb-1">
                Filter {field.headerName}
              </label>
              {field.type == 'text' && <input
                type="text"
                placeholder={`Filter ${field.headerName}`}
                value={filter[field.field] || ''}
                onChange={(e) => handleChange(e, field.field)}
                className="w-full p-2 h-11 border rounded"
              />}
              {field.type == 'dropdown#master_kategori' && (
                <select
                  onChange={(e) => handleChange(e, 'kategori')}
                  value={filter['kategori'] || ''}
                  className="w-full p-2 h-11 border rounded">
                  {kategori.error && <option>Error</option>}
                  {kategori.isLoading && <option>Memuat daftar kategori</option>}
                  {kategori.data && <option value=''>Silakan pilih kategori</option>}
                  {kategori.data && kategori.data.map((kat) => {
                    return <option key={kat.id} value={kat.id}>{kat.nama}</option>
                  })}
                </select>
              )}
              {field.type == 'daterange' && (
                <div className="flex flex-row w-full p-2 h-11 border rounded">
                  <input
                    aria-label="Date from"
                    type="date"
                    value={start}
                    onChange={(e) => {
                      setStart(e.target.value);
                      if (end) {
                        setFilter({
                          ...filter,
                          ['tanggal']: `${e.target.value}~${end}`
                        });
                      }
                    }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;-s/d-&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    aria-label="Date to"
                    type="date"
                    value={end}
                    onChange={(e) => {
                      setEnd(e.target.value);
                      if (start) {
                        setFilter({
                          ...filter,
                          ['tanggal']: `${start}~${e.target.value}`
                        });
                      }
                    }} />
                </div>
              )}
              {field.type == 'dropdown#stock' && (
                <select
                  onChange={(e) => handleChange(e, 'stock')}
                  value={filter['stock']}
                  className="w-full p-2 h-11 border rounded">
                  <option value={null}>Semua Stock</option>
                  <option value={1}>Stock Ada</option>
                  <option value={0}>Stock Habis</option>
                </select>
              )}
            </div>
          ))}
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => {
            setFilter({});
            handleFilter({});
          }}
          className="bg-gray-500 text-white px-4 py-2 rounded">
          Reset
        </button>
        <button
          onClick={() => handleFilter(filter)}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Apply
        </button>
      </div>
    </div>
  );
}