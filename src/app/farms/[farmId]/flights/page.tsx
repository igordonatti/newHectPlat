'use client';

import FlightCard from "@/components/FlightCard";
import FlightModal from "@/components/FlightModal";
import { FlightInterface } from "@/types/Flights";
import { useEffect, useState } from "react";

export default function FlightsPage({ params }: { params: { farmId: string } }) {
  const [flights, setFlights] = useState<FlightInterface[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { farmId } = params; // Obtém o farmId diretamente dos parâmetros

  // Função para buscar e filtrar voos do local storage
  const fetchFlights = () => {
    const storedFlights = localStorage.getItem('flights');
    if (storedFlights) {
      const allFlights = JSON.parse(storedFlights) as FlightInterface[];
      // Filtra os voos que pertencem à fazenda correspondente
      const farmFlights = allFlights.filter(flight => flight.farmId === Number(farmId));
      setFlights(farmFlights);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, [farmId]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleServiceAdded = (flightId: number, service: { id: number; name: string }) => {
    const updatedFlights = flights.map(flight => {
      if (flight.id === flightId) {
        // Adiciona o serviço ao array de serviços do voo
        return {
          ...flight,
          services: [...(flight.services || []), service],
        };
      }
      return flight;
    });
    setFlights(updatedFlights);
    localStorage.setItem('flights', JSON.stringify(updatedFlights)); // Atualiza o localStorage
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl text-apple-900 font-bold text-center">Voos da Fazenda {}</h1>
        <button
          onClick={handleOpenModal}
          className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-200"
        >
          Adicionar Voo
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} onServiceAdded={(service) => handleServiceAdded(flight.id, service)} />
        ))}
      </div>
      <FlightModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onFlightAdded={fetchFlights} farmId={Number(farmId)} />
    </div>
  );
}
