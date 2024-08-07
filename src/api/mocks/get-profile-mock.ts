import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json(
      {
        email: 'john.doe@example.com',
        phone: null,
        id: 'custom-user-id',
        name: 'John Doe',
        role: 'manager',
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        status: 200,
      },
    )
  },
)
