import { api } from '@/lib/axios'
export interface GetProfileResponse {
  email: string
  phone: string | null
  id: string
  name: string
  role: 'manager' | 'customer'
  createdAt: Date
  updatedAt: string | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
