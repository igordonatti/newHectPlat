import { getFarms } from "@/services/farmService"
import { FarmType } from "@/types/Farm"
import { useEffect, useState } from "react"

export const useFarms = () => {
  const [farms, setFarms] = useState<FarmType[]>([])

  useEffect(() => {
    const fetchFarms = async () => {
      const data = await getFarms()
      setFarms(data)
    }

    fetchFarms()
  }, [])

  return { farms }
}