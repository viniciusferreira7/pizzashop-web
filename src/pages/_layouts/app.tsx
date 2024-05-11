import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="flex flex-1 flex-col gap-4 px-8 py-6">
        <Outlet />
      </div>
    </div>
  )
}
