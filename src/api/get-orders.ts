import { api } from '@/lib/axios'

export interface GetOrdersParams {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface GetOrdersResponse {
  orders: Array<{
    status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'
    customerName: string
    orderId: string
    createAt: string
    total: number
  }>
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersParams) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status: status === 'all' ? undefined : status,
    },
  })

  return response.data
}
