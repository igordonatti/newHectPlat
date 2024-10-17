import { useState } from 'react';
import ServiceModal from './ServiceModal';
import { FlightInterface } from "@/types/Flights";

const FlightCard = ({ flight, onServiceAdded }: { flight: FlightInterface; onServiceAdded: (service: { id: number; name: string }) => void }) => {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const handleOpenServiceModal = () => {
    setIsServiceModalOpen(true);
  };

  const handleServiceSelected = (service: { id: number; name: string }) => {
    onServiceAdded(service); // Passa o serviço selecionado de volta para o FlightsPage
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer">
      <div onClick={handleOpenServiceModal}>
        <h3 className="text-lg font-semibold">{flight.name}</h3>
        {/* Exibir serviços associados ao voo */}
        {flight.services && flight.services.length > 0 ? (
          <div className="mt-4">
            <h4 className="text-md font-medium">Serviços:</h4>
            <ul className="list-disc list-inside">
              {flight.services.map((service) => (
                <li key={service.id} className="text-sm">{service.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-sm text-gray-500 mt-2">Nenhum serviço adicionado</p>
        )}
      </div>

      <ServiceModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        onServiceSelected={handleServiceSelected}
        flightName={flight.name}
      />
    </div>
  );
};

export default FlightCard;
