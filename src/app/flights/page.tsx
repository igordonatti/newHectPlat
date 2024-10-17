'use client';

import FlightCard from "@/components/FlightCard";
import FlightModal from "@/components/FlightModal";
import { FlightInterface } from "@/types/Flights";
import { useEffect, useState } from "react";

export default function FlightsPage() {
  const [flights, setFlights] = useState<FlightInterface[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para buscar fazendas do local storage
  const fetchFlights = () => {
    const storedFlights = localStorage.getItem('flights');
    if (storedFlights) {
      setFlights(JSON.parse(storedFlights));
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl text-apple-900 font-bold text-center">Voos da Fazenda</h1>
        <button
          onClick={handleOpenModal}
          className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-200"
        >
          Adicionar Voo
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
      <FlightModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onFlightAdded={fetchFlights} />
    </div>
  );
}
