import { FlightInterface } from "./Flights";

export interface FarmType {
  id: number;
  name: string;
  userId: number;
  flights: Array<FlightInterface>;
}