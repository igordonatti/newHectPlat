import { useState } from 'react';

const FarmModal = ({ isOpen, onClose, onFarmAdded }: { isOpen: boolean; onClose: () => void; onFarmAdded: () => void; }) => {
  const [farmName, setFarmName] = useState('');

  const handleAddFarm = () => {
    const storedFarms = localStorage.getItem('farms');
    const farms = storedFarms ? JSON.parse(storedFarms) : [];
    const newFarm = { id: Date.now(), name: farmName, flights: [], userId: 1 };
    farms.push(newFarm);
    localStorage.setItem('farms', JSON.stringify(farms));
    onFarmAdded(); // Atualiza a lista de fazendas
    onClose(); // Fecha o modal
    setFarmName(''); // Limpa o campo
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Adicionar Fazenda</h2>
        <input
          type="text"
          value={farmName}
          onChange={(e) => setFarmName(e.target.value)}
          placeholder="Nome da Fazenda"
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
        <div className="flex justify-between">
          <button
            onClick={handleAddFarm}
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-200"
          >
            Salvar
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

export default FarmModal;