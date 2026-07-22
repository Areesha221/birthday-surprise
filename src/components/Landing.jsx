import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Landing() {
  const [opened, setOpened] = useState(false)
  const audioRef = useRef(null)

  const scrollToLetter = () => {
    if (window.bgMusic) {
      window.bgMusic.volume = 0.3  // 30% volume
      window.bgMusic.play().catch(e => console.log("Play failed:", e))
    }
    setOpened(true)
    setTimeout(() => {
      document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' })
    }, 1500)
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-beige to-cream px-4">
      {/* Sparkles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Profile Picture */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-gold shadow-2xl overflow-hidden mb-6 animate-glow"
      >
        <img 
          src="/images/friend.jpg" 
          alt="Best Friend" 
          className="w-full h-full object-cover"
          onError={(e) => e.target.style.display = 'none'} 
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="font-serif text-4xl md:text-6xl text-center text-navy mb-2 px-4"
      >
        A Special Birthday Surprise
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="font-script text-5xl md:text-7xl gold-text mb-10 text-center px-4"
      >
        For My Dearest Friend 💕
      </motion.h2>

      {/* Envelope */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ delay: 1.5 }}
            onClick={scrollToLetter}
            className="cursor-pointer relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative w-64 h-40"
            >
              {/* Envelope body */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-blue-900 rounded-lg shadow-2xl border-2 border-gold" />
              {/* Flap */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 origin-top bg-gradient-to-br from-navy to-blue-900 border-2 border-gold rounded-t-lg"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                animate={{ rotateX: opened ? 180 : 0 }}
              />
              {/* Heart seal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">💌</div>
            </motion.div>
            <p className="text-center mt-4 font-script text-2xl text-navy">Click to open your surprise 💫</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hearts explosion */}
      <AnimatePresence>
        {opened && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
            animate={{
              opacity: 0,
              x: (Math.random() - 0.5) * 600,
              y: (Math.random() - 0.5) * 600,
              scale: 2,
            }}
            transition={{ duration: 2 }}
            className="absolute text-3xl"
          >
            {['❤️', '✨', '💖', '🌟', '💫'][i % 5]}
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  )
}