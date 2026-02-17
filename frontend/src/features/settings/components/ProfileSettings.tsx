import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { useAuth, useUpdateProfile } from '@/features/auth/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

const profileSettingsSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.'),
  email: z.string().email('Email inválido.'),
});

type ProfileSettingsForm = z.infer<typeof profileSettingsSchema>;

export function ProfileSettings() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();

  const form = useForm<ProfileSettingsForm>({
    resolver: zodResolver(profileSettingsSchema),
    values: {
      name: user?.name || '',
      email: user?.email || '',
    },
  });

  const onSubmit = (data: ProfileSettingsForm) => {
    if (!user) return;
    updateProfile({ id: user.id, data });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('settings.profile_title')}</CardTitle>
        <CardDescription>{t('settings.profile_desc')}</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user?.avatarUrl || undefined} />
                <AvatarFallback className="text-lg">
                  {user?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" type="button">
                {t('settings.change_photo')}
              </Button>
            </div>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('settings.full_name')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('settings.name_placeholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('auth.email')}</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormDescription>{t('settings.email_desc')}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between border-t px-6 py-4">
            <p className="text-sm text-muted-foreground">
              {t('settings.account_is')}{' '}
              {user?.role === 'OWNER'
                ? t('settings.account_role_admin')
                : t('settings.account_role_member')}
              .
            </p>
            <Button type="submit" disabled={isUpdating}>
              {isUpdating ? t('settings.saving') : t('settings.save_changes')}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
