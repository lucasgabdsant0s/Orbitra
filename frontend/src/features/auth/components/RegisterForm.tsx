import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Building2, Loader2, Mail, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { useRegister } from '../hooks';

const registerSchema = z.object({
  tenantName: z.string().min(2, 'Nome da organização deve ter pelo menos 2 caracteres'),
  userName: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const { t } = useTranslation();
  const { mutate: register, isPending } = useRegister();

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    register(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg"
    >
      <Card className="bg-card/50 backdrop-blur-2xl border-border shadow-2xl rounded-[2.5rem] overflow-hidden relative">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>
        <CardHeader className="space-y-2 pt-10 pb-6 text-center">
          <div className="mx-auto size-14 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] mb-4">
            <User size={28} className="text-primary-foreground" />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground tracking-tight">
            {t('auth.register_title')}
          </CardTitle>
          <CardDescription className="text-muted-foreground font-medium">
            {t('auth.register_subtitle')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-muted-foreground font-medium ml-1">
                {t('auth.organization_name')}
              </Label>
              <div className="relative group">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder={t('auth.organization_placeholder')}
                  className="bg-secondary/50 border-border text-foreground rounded-xl h-12 pl-11 focus-visible:ring-primary/30"
                  {...registerField('tenantName')}
                />
              </div>
              {errors.tenantName && (
                <p className="text-sm text-destructive ml-1">{errors.tenantName.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label className="text-muted-foreground font-medium ml-1">
                  {t('auth.user_name')}
                </Label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    placeholder={t('auth.user_name_placeholder')}
                    className="bg-secondary/50 border-border text-foreground rounded-xl h-12 pl-11 focus-visible:ring-primary/30"
                    {...registerField('userName')}
                  />
                </div>
                {errors.userName && (
                  <p className="text-sm text-destructive ml-1">{errors.userName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-muted-foreground font-medium ml-1">{t('auth.email')}</Label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    placeholder="seu@email.com"
                    className="bg-secondary/50 border-border text-foreground rounded-xl h-12 pl-11 focus-visible:ring-primary/30"
                    {...registerField('email')}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive ml-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground font-medium ml-1">{t('auth.password')}</Label>
              <Input
                type="password"
                placeholder="••••••••"
                className="bg-secondary/50 border-border text-foreground rounded-xl h-12 focus-visible:ring-primary/30"
                {...registerField('password')}
              />
              {errors.password && (
                <p className="text-sm text-destructive ml-1">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl font-bold shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all hover:scale-[1.01] mt-4"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
              ) : (
                t('auth.register_title')
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="pb-10 pt-4 flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            {t('auth.already_account')}{' '}
            <Link to="/login" className="text-primary hover:underline font-bold">
              {t('auth.login_link')}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
