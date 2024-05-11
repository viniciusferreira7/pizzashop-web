import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <header className="flex h-16 items-center gap-4 px-6">
        <Pizza className="size-4" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center gap-x-4 lg:gap-x-6">
          <Link to="/">
            <Home className="size-4" />
            Incio
          </Link>
          <Link to="/ordens">
            <UtensilsCrossed className="size-4" />
            Pedidos
          </Link>
        </nav>
      </header>
    </div>
  )
}
