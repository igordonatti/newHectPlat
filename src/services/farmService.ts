import { FarmType } from "@/types/Farm"

export const getFarms = async () => {
  //const response = await fetch('/api/farms')
  
  const response: FarmType[] = [
    {
      id: 1,
      name: 'Fazenda Feliz',
      flights: [],
      userId: 1
    },
    {
      id: 2,
      name: 'Fazenda Happy',
      flights: [],
      userId: 1
    },
    {
      id: 3,
      name: 'Fazenda Alegre',
      flights: [],
      userId: 1
    },
    {
      id: 4,
      name: 'Fazenda do João',
      flights: [],
      userId: 1
    },
]
  
  return response
}