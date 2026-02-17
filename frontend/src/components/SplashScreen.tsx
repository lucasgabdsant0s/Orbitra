import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
              boxShadow: '0 0 0px rgba(var(--primary-rgb), 0)',
            }}
            animate={{
              scale: 1,
              opacity: 1,
              boxShadow: '0 0 40px rgba(var(--primary-rgb), 0.4)',
            }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
            }}
            className="size-20 bg-primary rounded-2xl flex items-center justify-center text-white text-4xl font-bold mb-8"
          >
            O
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-3xl font-bold text-white tracking-widest mb-2">ORBITRA</h1>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="mt-4 text-zinc-500 text-sm font-medium tracking-tight uppercase">
              Mantenha o foco. <br /> Deixe a órbita cuidar do resto.
            </p>
          </motion.div>

          <div className="absolute bottom-12 flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-primary animate-pulse" />
            <div className="size-1.5 rounded-full bg-primary animate-pulse [animation-delay:0.2s]" />
            <div className="size-1.5 rounded-full bg-primary animate-pulse [animation-delay:0.4s]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
