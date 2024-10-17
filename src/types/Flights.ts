export interface FlightInterface {
  id: number;
  date: string;
  projectId: number;
  services: Array<{id: number}>;
}