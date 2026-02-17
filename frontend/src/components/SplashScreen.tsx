import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                duration: 1.5,
              }}
              className="relative z-10 size-24 bg-primary rounded-[2rem] flex items-center justify-center text-white text-5xl font-black shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)]"
            >
              O
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.5, 0], scale: 1.5 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
              className="absolute inset-0 rounded-[2rem] border border-primary/30 pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.3, 0], scale: 2 }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
                delay: 1,
              }}
              className="absolute inset-0 rounded-[2rem] border border-primary/20 pointer-events-none"
            />
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center space-y-4 text-center px-6"
          >
            <div className="space-y-1">
              <h1 className="text-4xl font-black text-white tracking-[0.2em] ml-[0.2em]">
                ORBITRA
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ delay: 1.2, duration: 1.5, ease: 'easeInOut' }}
                className="h-[2px] mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>

            <p className="max-w-[280px] text-zinc-400 text-sm font-medium leading-relaxed tracking-wide">
              Stay focused. <br />
              <span className="text-zinc-500">Let Orbitra take care of the rest.</span>
            </p>
          </motion.div>
          <div className="absolute bottom-16 flex items-center gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
                className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
