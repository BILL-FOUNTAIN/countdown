/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Background from "./components/Background";
import Countdown from "./components/Countdown";
import Guestbook from "./components/Guestbook";

export default function App() {
  return (
    <main className="relative min-h-screen">
      <Background />
      
      <div className="relative z-10 flex flex-col items-center pt-24 md:pt-32">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/40 font-medium ml-1">
              Celebrating the life of
            </span>
            <h1 className="text-5xl md:text-8xl font-serif italic tracking-tight mb-2">
              Monsieur <span className="text-accent-blue text-glow-blue not-italic font-display font-black">Billy James</span>
            </h1>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/30 font-display tracking-[0.2em] uppercase text-[10px] md:text-xs"
          >
            July 27, 2026 • Save the Date
          </motion.p>
        </div>

        {/* Countdown Section */}
        <section className="w-full mb-32">
          <Countdown />
        </section>

        {/* Wall of Wishes Section */}
        <section className="w-full bg-[#050505]/50 border-y border-white/5 backdrop-blur-sm">
          <Guestbook />
        </section>

        {/* Footer */}
        <footer className="py-12 text-white/10 text-xs tracking-widest uppercase font-mono">
          Made for the milestone • 2026
        </footer>
      </div>
    </main>
  );
}
