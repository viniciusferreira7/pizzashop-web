import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const orderFiltersSchema = z.object({
  orderId: z
    .string()
    .optional()
    .transform((value) => value?.trim()),
  customerName: z
    .string()
    .optional()
    .transform((value) => value?.trim()),

  status: z
    .string()
    .optional()
    .transform((value) => value?.trim()),
})

type OrderFilterSchema = z.infer<typeof orderFiltersSchema>

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId') ?? undefined
  const customerName = searchParams.get('customerName') ?? undefined
  const status = searchParams.get('status') ?? 'all'

  const { handleSubmit, register, control, reset } = useForm<OrderFilterSchema>(
    {
      resolver: zodResolver(orderFiltersSchema),
      values: {
        orderId,
        customerName,
        status,
      },
    },
  )

  function handleFilter({ orderId, customerName, status }: OrderFilterSchema) {
    setSearchParams((state) => {
      if (orderId) {
        state.set('orderId', orderId)
      } else {
        state.delete('orderId')
      }
      if (customerName) {
        state.set('customerName', customerName)
      } else {
        state.delete('customerName')
      }
      if (status) {
        state.set('status', status)
      } else {
        state.delete('status')
      }

      state.set('page', '1')

      return state
    })
  }

  function handleClearFilter() {
    setSearchParams((state) => {
      state.delete('orderId')
      state.delete('customerName')
      state.delete('status')
      state.set('page', '1')

      return state
    })

    reset({
      orderId: '',
      customerName: '',
      status: 'all',
    })
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register('orderId')}
      />
      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register('customerName')}
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { name, value, onChange, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              value={value}
              onValueChange={onChange}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[140px]">
                <SelectValue />
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
          )
        }}
      />
      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 size-4" />
        Filtrar resultados
      </Button>
      <Button
        type="button"
        variant="outline"
        size="xs"
        onClick={handleClearFilter}
      >
        <Search className="mr-2 size-4" />
        Remover Filtros
      </Button>
    </form>
  )
}
