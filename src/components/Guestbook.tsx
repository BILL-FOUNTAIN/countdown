/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, type FormEvent } from "react";
import { Wish } from "../types";
import MessageCard from "./MessageCard";

export default function Guestbook() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("billy_james_wishes");
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse wishes", e);
      }
    } else {
      // Default initial wishes
      setWishes([
        { id: '1', name: 'Alain D.', message: 'Hâte de fêter ça avec toi !', createdAt: Date.now() - 86400000 },
        { id: '2', name: 'Sophie L.', message: 'Que cette année soit la meilleure.', createdAt: Date.now() - 172800000 },
      ]);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (wishes.length > 0) {
      localStorage.setItem("billy_james_wishes", JSON.stringify(wishes));
    }
  }, [wishes]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      const newWish: Wish = {
        id: Math.random().toString(36).substr(2, 9),
        name: name.trim(),
        message: message.trim(),
        createdAt: Date.now()
      };

      setWishes(prev => [newWish, ...prev]);
      setName("");
      setMessage("");
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20 flex flex-col gap-16">
      {/* Search/Filter or Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <h2 className="text-3xl md:text-5xl font-display font-medium">Wall of Wishes</h2>
        <p className="text-white/40 max-w-lg">
          Laissez un petit mot pour Monsieur Billy James en attendant le grand jour.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-start">
        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sticky top-8"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white/50 font-medium">Votre Nom</label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex. Jean Dupont"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue/50 transition-colors font-sans"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white/50 font-medium">Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message ici..."
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue/50 transition-colors font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 bg-accent-blue/20 hover:bg-accent-blue/30 border border-accent-blue/30 text-accent-blue font-display font-semibold py-4 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {isSubmitting ? "Envoi..." : "Laissez un message"}
            </button>
          </form>
        </motion.div>

        {/* Wishes Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 wall-of-wishes max-h-[800px] overflow-y-auto pr-4 scrollbar-hide">
          <AnimatePresence mode="popLayout">
            {wishes.map((wish) => (
              <MessageCard key={wish.id} wish={wish} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
