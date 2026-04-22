import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/features/auth/hooks';
import { useDeleteTenant, useTenants, useUpdateTenant } from '@/features/tenants/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { Shield } from 'lucide-react';

const tenantSettingsSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.'),
  slug: z
    .string()
    .min(2, 'O slug deve ter pelo menos 2 caracteres.')
    .regex(/^[a-z0-9-]+$/, 'Slug inválido.'),
});

type TenantSettingsForm = z.infer<typeof tenantSettingsSchema>;

export function TenantSettings() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { data: tenants } = useTenants();
  const { mutate: updateTenant, isPending: isUpdating } = useUpdateTenant();
  const { mutate: deleteTenant, isPending: isDeleting } = useDeleteTenant();

  const currentTenant = tenants?.find((t) => t.id === user?.tenantId);

  const form = useForm<TenantSettingsForm>({
    resolver: zodResolver(tenantSettingsSchema),
    values: {
      name: currentTenant?.name || '',
      slug: currentTenant?.slug || '',
    },
  });

  const onSubmit = (data: TenantSettingsForm) => {
    if (!currentTenant?.id) return;
    updateTenant({ id: currentTenant.id, data: { name: data.name } });
  };

  const handleDelete = () => {
    if (!currentTenant?.id) return;
    if (confirm(t('settings.confirm_delete_org'))) {
      deleteTenant(currentTenant.id);
    }
  };

  const isAdmin = user?.role === 'ADMIN' || user?.role === 'OWNER';

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center space-y-4 bg-card/50 rounded-[2.5rem] border border-border">
        <div className="p-4 bg-destructive/10 rounded-full text-destructive">
          <Shield size={32} />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold">{t('common.forbidden')}</h3>
          <p className="text-muted-foreground">{t('settings.only_admin_can_configure')}</p>
        </div>
      </div>
    );
  }

  if (!currentTenant) {
    return <div>{t('common.loading')}</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('settings.org_title')}</CardTitle>
          <CardDescription>{t('settings.org_desc')}</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('settings.org_name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('settings.org_name_placeholder')} {...field} />
                    </FormControl>
                    <FormDescription>{t('settings.org_name_desc')}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="minha-empresa" {...field} disabled />
                    </FormControl>
                    <FormDescription>{t('settings.slug_desc')}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-between border-t px-6 py-4">
              <p className="text-sm text-muted-foreground">{t('settings.keep_updated')}</p>
              <Button type="submit" disabled={isUpdating}>
                {isUpdating ? t('settings.saving') : t('settings.save_changes')}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">{t('settings.danger_zone')}</CardTitle>
          <CardDescription>{t('settings.danger_zone_desc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{t('settings.danger_zone_warning')}</p>
        </CardContent>
        <CardFooter>
          <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? t('settings.deleting') : t('settings.delete_org')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
