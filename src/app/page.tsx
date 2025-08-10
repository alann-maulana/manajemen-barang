'use client';
import TabComponent from '@/app/components/TabComponent';

export default function Home() {
  const tabs = [
    { id: 1, title: 'Master Barang' },
    { id: 2, title: 'Master Kategori Barang' },
    { id: 3, title: 'Stock Barang' }
  ];

  return (
    <div>
      <h1
        className="px-12 py-4 text-2xl text-white font-bold mb-6 bg-blue-500">
        Inventory Management
      </h1>
      <TabComponent tabs={tabs} />
    </div>
  );
}