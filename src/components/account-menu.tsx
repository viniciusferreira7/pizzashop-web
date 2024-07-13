import { useQueries } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { getProfile } from '@/api/get-profile'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

export function AccountMenu() {
  const [profile, managedRestaurant] = useQueries({
    queries: [
      {
        queryKey: ['profile'],
        queryFn: getProfile,
      },
      {
        queryKey: ['managed-restaurant'],
        queryFn: getManagedRestaurant,
      },
    ],
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          {managedRestaurant.isLoading ? (
            <>
              <Skeleton className="h-4 w-40" /> <ChevronDown />
            </>
          ) : (
            <>
              {managedRestaurant.data?.name} <ChevronDown />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          {profile.isLoading ? (
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32 " />
              <Skeleton className="h-4 w-40 " />
            </div>
          ) : (
            <>
              <span>{profile.data?.name}</span>
              <span className="text-sm font-normal text-muted-foreground">
                {profile.data?.email}
              </span>
            </>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="mr-2 size-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="mr-2 size-4" />
          <span>sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
