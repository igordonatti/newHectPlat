import { useState } from 'react';

const ServiceModal = ({
  isOpen,
  onClose,
  onServiceSelected,
  flightName,
}: {
  isOpen: boolean;
  onClose: () => void;
  onServiceSelected: (service: { id: number; name: string }) => void;
  flightName: string;
}) => {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleServiceSelection = () => {
    const service = { id: Date.now(), name: selectedService }; // Criando um objeto de serviço com um id único
    onServiceSelected(service);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Serviços para o Voo {flightName}</h2>

        {/* Select para escolher o serviço */}
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="" disabled>
            Selecione um serviço
          </option>
          <option value="Serviço 1">Serviço 1</option>
          <option value="Serviço 2">Serviço 2</option>
          <option value="Serviço 3">Serviço 3</option>
          <option value="Serviço 4">Serviço 4</option>
        </select>

        <div className="flex justify-between">
          <button
            onClick={handleServiceSelection}
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-200"
          >
            Selecionar
          </button>
          <button
            onClick={onClose}
            className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-200"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
