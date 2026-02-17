import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useAuth } from '@/features/auth/hooks';
import { useTenants } from '@/features/tenants/hooks';
import { cn } from '@/lib/utils';
import { Building2, Check, ChevronsUpDown, PlusCircle } from 'lucide-react';
import * as React from 'react';
import { CreateTenantDialog } from './CreateTenantDialog';

export function TenantSwitcher({ className }: { className?: string }) {
  const { user } = useAuth();
  const { data: tenants, isLoading } = useTenants();
  const [open, setOpen] = React.useState(false);
  const [showNewTenantDialog, setShowNewTenantDialog] = React.useState(false);

  const currentTenant = tenants?.find((t) => t.id === user?.tenantId) || tenants?.[0];

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Selecione uma organização"
            className={cn(
              'w-full justify-between h-12 px-3 border-border/50 bg-background/50 hover:bg-accent/50',
              className,
            )}
          >
            <div className="flex items-center gap-2 truncate">
              <Avatar className="h-6 w-6 rounded-md">
                <AvatarImage
                  src={`https://avatar.vercel.sh/${currentTenant?.name}.png`}
                  alt={currentTenant?.name}
                />
                <AvatarFallback className="rounded-md">
                  <Building2 className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start truncate text-left">
                <span className="text-sm font-medium truncate w-[120px]">
                  {currentTenant?.name || 'Selecione...'}
                </span>
                <span className="text-xs text-muted-foreground">
                  {currentTenant?.slug ? 'Pro' : 'Gratuito'}
                </span>
              </div>
            </div>
            <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Procurar organização..." />
              <CommandEmpty>Nenhuma organização encontrada.</CommandEmpty>
              <CommandGroup heading="Organizações">
                {isLoading ? (
                  <CommandItem disabled>Carregando...</CommandItem>
                ) : (
                  tenants?.map((tenant) => (
                    <CommandItem
                      key={tenant.id}
                      onSelect={() => {
                        console.log('Switch to:', tenant.id);
                        setOpen(false);
                      }}
                      className="text-sm"
                    >
                      <Avatar className="mr-2 h-5 w-5 rounded-sm">
                        <AvatarFallback className="rounded-sm text-[10px]">
                          {tenant.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      {tenant.name}
                      <Check
                        className={cn(
                          'ml-auto h-4 w-4',
                          currentTenant?.id === tenant.id ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                    </CommandItem>
                  ))
                )}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    setOpen(false);
                    setShowNewTenantDialog(true);
                  }}
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Criar organização
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <CreateTenantDialog open={showNewTenantDialog} onOpenChange={setShowNewTenantDialog} />
    </>
  );
}
