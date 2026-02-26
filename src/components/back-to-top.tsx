"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("case-studies");
      if (section) {
        const rect = section.getBoundingClientRect();
        setVisible(rect.bottom < 0);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full
                     bg-accent-orange px-4 py-2.5 text-white text-xs font-medium tracking-wide
                     hover:bg-accent-orange/85
                     transition-colors duration-200 cursor-pointer shadow-sm"
        >
          <ChevronUp size={14} strokeWidth={2.5} />
          Back to top
        </motion.button>
      )}
    </AnimatePresence>
  );
}
