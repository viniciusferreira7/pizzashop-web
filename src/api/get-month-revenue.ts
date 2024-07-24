import { api } from '@/lib/axios'

export interface GetMonthRevenueResponse {
  receipt: string
  diffFromLastMonth: string | number
}

export async function getMonthRevenue() {
  const { data } = await api.get<GetMonthRevenueResponse>(
    '/metrics/month-receipt',
  )

  return data
}
