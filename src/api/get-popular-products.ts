import { api } from '@/lib/axios'

export type GetPopularProductsResponse = Array<{
  product: string
  amount: string | number
}>

export async function getPopularProducts() {
  const { data } = await api.get<GetPopularProductsResponse>(
    '/metrics/popular-products',
  )

  return data
}
