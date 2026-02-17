import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileSettings } from '@/features/settings/components/ProfileSettings';
import { TenantSettings } from '@/features/tenants/components/TenantSettings';
import { Building2, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function SettingsPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{t('settings.title')}</h1>
        <p className="text-muted-foreground mt-2">{t('settings.subtitle')}</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="profile">
            <User className="w-4 h-4 mr-2" />
            {t('settings.profile_tab')}
          </TabsTrigger>
          <TabsTrigger value="tenant">
            <Building2 className="w-4 h-4 mr-2" />
            {t('settings.organization_tab')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <ProfileSettings />
        </TabsContent>

        <TabsContent value="tenant" className="space-y-6">
          <TenantSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
