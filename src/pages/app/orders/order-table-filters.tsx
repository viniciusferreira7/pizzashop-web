import { Search } from 'lucide-react'
import { Search } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface OrderTableFiltersProps { }

export function OrderTableFilters(props: OrderTableFiltersProps) {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select>
        <SelectTrigger className="h-8 w-[100px]">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparado</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 size-4" />
        Filtrar resultados
      </Button>
      <Button type="button" variant="outline" size="xs">
        <Search className="mr-2 size-4" />
        Remover Filtros
      </Button>
    </form>
  )
}
