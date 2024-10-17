'use client';

import FarmCard from "@/components/FarmCard";
import FarmModal from "@/components/FarmModal";
import { FarmType } from "@/types/Farm";
import { useEffect, useState } from "react";

export default function FarmsPage() {
  const [farms, setFarms] = useState<FarmType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para buscar fazendas do local storage
  const fetchFarms = () => {
    const storedFarms = localStorage.getItem('farms');
    if (storedFarms) {
      setFarms(JSON.parse(storedFarms));
    }
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl text-apple-900 font-bold text-center">Fazendas</h1>
        <button
          onClick={handleOpenModal}
          className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-200"
        >
          Adicionar Fazenda
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {farms.map((farm) => (
          <FarmCard key={farm.id} farm={farm} />
        ))}
      </div>
      <FarmModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onFarmAdded={fetchFarms} />
    </div>
  );
}
