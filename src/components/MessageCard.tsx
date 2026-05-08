/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import type { FC } from "react";
import { Wish } from "../types";

const MessageCard: FC<{ wish: Wish }> = ({ wish }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-6 md:p-8 flex flex-col gap-4 relative group"
    >
      <div className="absolute top-4 right-4 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-accent-blue font-semibold">
          {new Date(wish.createdAt).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </span>
        <h4 className="text-xl font-display font-medium text-white/90">
          {wish.name}
        </h4>
      </div>

      <p className="text-white/60 leading-relaxed font-sans italic">
        "{wish.message}"
      </p>
      
      <div className="mt-auto pt-4 border-t border-white/5">
        <div className="w-8 h-1 bg-accent-blue/30 rounded-full" />
      </div>
    </motion.div>
  );
};

export default MessageCard;
