import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from '@/components/header'
import { api } from '@/lib/axios'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorsId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data?.code
          const message = error.response?.data?.message

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', { replace: true })
          }
          if (status === 500 && message === 'Unauthorized') {
            navigate('/sign-in', { replace: true })
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorsId)
    }
  }, [navigate])

  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="flex flex-1 flex-col gap-4 px-8 py-6">
        <Outlet />
      </div>
    </div>
  )
}
