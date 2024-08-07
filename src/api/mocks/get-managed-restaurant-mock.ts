import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurant = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json(
    {
      id: 'custom-restaurant-id',
      name: 'Pizza Shop',
      description: 'Custom restaurant description',
      createdAt: new Date(),
      updatedAt: null,
      managerId: 'custom-user-id',
    },
    {
      status: 200,
    },
  )
})
