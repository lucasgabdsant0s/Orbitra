import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(nextLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="relative h-8 px-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all group overflow-hidden"
    >
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
        <AnimatePresence mode="wait">
          <motion.span
            key={i18n.language}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {i18n.language === 'pt' ? 'PT' : 'EN'}
          </motion.span>
        </AnimatePresence>
        <span className="w-[1px] h-3 bg-white/10" />
        <span className="opacity-40">{i18n.language === 'pt' ? 'EN' : 'PT'}</span>
      </div>
    </Button>
  );
}
