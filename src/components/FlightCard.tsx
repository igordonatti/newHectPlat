'use client';

import { FlightInterface } from "@/types/Flights";
import { useRouter } from 'next/navigation';

const FlightCard = ({ flight }: { flight: FlightInterface }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/farms/${flight.id}/flights`); // Altere para a rota desejada
  };

  return (
    <div
      className="border border-gray-300 rounded-lg p-4 cursor-pointer transition-transform duration-200 hover:shadow-lg hover:scale-105"
      onClick={handleClick}
    >
      <h2 className="text-lg font-semibold text-apple-900">{flight.date}</h2>
    </div>
  );
};

export default FlightCard;
