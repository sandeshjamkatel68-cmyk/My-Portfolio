"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Skip loading screen if already visited in this session
    if (sessionStorage.getItem("visited")) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 40);

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("visited", "1");
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-ink flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-display text-4xl font-bold text-bone mb-12"
          >
            SJ<span className="text-sage">.</span>
          </motion.div>

          {/* Progress bar */}
          <div className="w-40 h-px bg-bone/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-sage"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(count, 100)}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Counter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-xs text-bone/25 mt-4 tabular-nums"
          >
            {Math.min(count, 100)}
          </motion.p>

          {/* Slide-up curtain on exit */}
          <motion.div
            initial={{ y: "100%" }}
            exit={{ y: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
            className="absolute inset-0 bg-bone pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
