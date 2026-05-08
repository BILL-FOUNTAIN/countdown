/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Background() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Animated Gradient Layer */}
      <div className="absolute inset-0 animated-gradient opacity-60" />
      
      {/* Atmospheric Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-blue/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-gold/5 blur-[120px] rounded-full" />

      {/* Background Images */}
      <motion.img
        src="photo1.jpeg"
        referrerPolicy="no-referrer"
        className="absolute top-[10%] right-[-5%] w-[400px] h-[600px] object-cover opacity-[0.08] grayscale blur-[2px]"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="photo2.jpeg"
        referrerPolicy="no-referrer"
        className="absolute bottom-[5%] left-[-5%] w-[450px] h-[650px] object-cover opacity-[0.08] grayscale blur-[2px]"
        animate={{
          y: [0, 40, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="photo.jpeg"
        referrerPolicy="no-referrer"
        className="absolute bottom-[20%] right-[10%] w-[350px] h-[550px] object-cover opacity-[0.05] grayscale blur-[4px]"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full opacity-[0.1]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
