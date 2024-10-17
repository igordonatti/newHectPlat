import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FlightModal = ({
  isOpen,
  onClose,
  onFlightAdded,
  farmId,
}: {
  isOpen: boolean;
  onClose: () => void;
  onFlightAdded: () => void;
  farmId: number; // Recebendo o farmId como prop
}) => {
  const [flightName, setFlightName] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const handleAddFlight = () => {
    const storedFlights = localStorage.getItem('flights');
    const flights = storedFlights ? JSON.parse(storedFlights) : [];
    
    // Cria o novo voo com farmId associado
    const newFlight = { 
      id: Date.now(), 
      name: flightName, 
      flights: [], 
      userId: 1, 
      images, 
      farmId  // Associa o voo à fazenda correta
    };
    
    flights.push(newFlight);
    localStorage.setItem('flights', JSON.stringify(flights));
    onFlightAdded(); // Atualiza a lista de fazendas
    onClose(); // Fecha o modal
    setFlightName(''); // Limpa o campo
    setImages([]); // Limpa as imagens
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages([...images, ...acceptedFiles]);
  }, [images]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Adicionar Voo</h2>
        <input
          type="text"
          value={flightName}
          onChange={(e) => setFlightName(e.target.value)}
          placeholder="Data do Voo"
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />

        {/* Área de envio de imagens */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center mb-4 cursor-pointer ${
            isDragActive ? 'border-green-600' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-green-600">Solte os arquivos aqui...</p>
          ) : (
            <p className="text-gray-600">Arraste e solte as imagens aqui, ou clique para selecionar os arquivos</p>
          )}
        </div>

        {/* Lista de imagens selecionadas */}
        {images.length > 0 && (
          <ul className="mb-4">
            {images.map((file, index) => (
              <li key={index} className="text-sm text-gray-700">
                {file.name}
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-between">
          <button
            onClick={handleAddFlight}
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

export default FlightModal;
