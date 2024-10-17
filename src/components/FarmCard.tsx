'use client';

import { FarmType } from "@/types/Farm";
import { useRouter } from 'next/navigation';

const FarmCard = ({ farm }: { farm: FarmType }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/farms/${farm.id}/flights`); // Altere para a rota desejada
  };

  return (
    <div
      className="border border-gray-300 rounded-lg p-4 cursor-pointer transition-transform duration-200 hover:shadow-lg hover:scale-105"
      onClick={handleClick}
    >
      <h2 className="text-lg font-semibold text-apple-900">{farm.name}</h2>
      <p className="text-gray-600">Voos: {farm.flights.length}</p>
    </div>
  );
};

export default FarmCard;
