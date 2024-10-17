export interface FlightInterface {
  id: number;
  name: string;
  farmId: number;
  services: Array<{ id: number; name: string }>; // Agora suporta múltiplos serviços
}
