import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCanceledOrdersCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (dia)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tighter">32</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-2%</span> em
          relação a ontem
        </p>
      </CardContent>
    </Card>
  )
}
