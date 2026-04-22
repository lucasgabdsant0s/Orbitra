import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAcceptInvite, useVerifyInvite } from '../hooks';

import { useAuthStore } from '@/stores/authStore';

export function InviteWelcomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [searchParams] = useSearchParams();
  const { tenantId, token } = useParams<{ tenantId: string; token: string }>();
  const { data: invite, isLoading, isError } = useVerifyInvite(tenantId, token);
  const { mutateAsync: acceptInvite, isPending } = useAcceptInvite();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const companyName = useMemo(
    () => invite?.tenantName || t('invite.default_company_name'),
    [invite?.tenantName, t],
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!tenantId || !token) return;

    try {
      const response = await acceptInvite({ tenantId, token, name, password });
      setAuth(response.token, response.user);
      navigate('/');
    } catch (error) {
      // Error is already handled by toast in the hook
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-4 text-white">
        {t('common.loading')}
      </div>
    );
  }

  if (isError || !invite) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <Card className="w-full max-w-lg bg-card/50 backdrop-blur-2xl border-border rounded-[2rem]">
          <CardHeader>
            <CardTitle>{t('invite.invalid_title')}</CardTitle>
            <CardDescription>{t('invite.invalid_description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to="/login">{t('auth.login_link')}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <Card className="w-full max-w-lg bg-card/50 backdrop-blur-2xl border-border rounded-[2rem]">
        <CardHeader>
          <CardTitle>{t('invite.welcome_title', { company: companyName })}</CardTitle>
          <CardDescription>{t('invite.welcome_description', { email: invite.email })}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="invite-name">{t('auth.name')}</Label>
              <Input
                id="invite-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t('auth.user_name_placeholder')}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="invite-password">{t('auth.password')}</Label>
              <Input
                id="invite-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                minLength={6}
                required
              />
            </div>

            <p className="text-sm text-muted-foreground">
              {t('invite.selected_role')}:{' '}
              <span className="font-semibold">{searchParams.get('role') || invite.role}</span>
            </p>

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? t('common.loading') : t('invite.create_account_button')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
