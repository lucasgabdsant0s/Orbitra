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
import { Loader2, Lock, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { useLogin } from '../hooks';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { t } = useTranslation();
  const { mutate: login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <Card className="bg-card/50 backdrop-blur-2xl border-border shadow-2xl rounded-[2rem] overflow-hidden relative">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>
        <CardHeader className="space-y-4 pt-10 pb-6 text-center">
          <div className="mx-auto size-14 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
            <Lock className="text-primary-foreground" size={24} />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground tracking-tight">
            {t('auth.login_title')}
          </CardTitle>
          <CardDescription className="text-muted-foreground font-medium">
            {t('auth.login_subtitle')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-muted-foreground font-medium ml-1">{t('auth.email')}</Label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder="seu@email.com"
                  className="bg-secondary/50 border-border text-foreground rounded-xl h-12 pl-11 focus-visible:ring-primary/30"
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive ml-1">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground font-medium ml-1">{t('auth.password')}</Label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="bg-secondary/50 border-border text-foreground rounded-xl h-12 pl-11 focus-visible:ring-primary/30"
                  {...register('password')}
                />
              </div>
              {errors.password && (
                <p className="text-sm text-destructive ml-1">{errors.password.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl font-bold shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all hover:scale-[1.01]"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
              ) : (
                t('auth.login_button')
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="pb-10 pt-4 flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            {t('auth.no_account')}{' '}
            <Link to="/register" className="text-primary hover:underline font-bold">
              {t('auth.register_link')}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
