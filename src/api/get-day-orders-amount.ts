import { api } from '@/lib/axios'

export interface GetDayOrdersAmountResponse {
  amount: number
  diffFromYesterday: string | number
}

export async function getDayOrdersAmount() {
  const { data } = await api.get<GetDayOrdersAmountResponse>(
    '/metrics/day-orders-amount',
  )

  return data
}
