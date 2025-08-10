'use client';
import { useState } from 'react';
import MasterBarang from './MasterBarang';
import MasterKategori from './MasterKategori';
import StockBarang from './StockBarang';

export default function TabComponent({ tabs }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-center">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`py-2 px-16 font-semibold border-2 border-[#A8A8A8] ${
              activeTab === tab.id
                ? 'bg-[#A8A8A8]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="py-4">
        {activeTab === 1 && <MasterBarang />}
        {activeTab === 2 && <MasterKategori />}
        {activeTab === 3 && <StockBarang />}
      </div>
    </div>
  );
}