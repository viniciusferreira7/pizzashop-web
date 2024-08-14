import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json(
    {
      name: 'Pizza Shop',
      id: 'restaurant-id',
      description: null,
      managerId: 'manager-id',
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      status: 200,
    },
  )
})
