import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const secrets = [
  "Remember when we laughed until we cried? 🌟",
  "You're stronger than you think 💪",
  "The world is better with you in it 💙",
  "Your kindness changes lives 🌸",
  "Never forget how special you are ✨",
  "The best is yet to come 🌅",
  "You make the world better 🌍",
  "I'll always have your back 🤝",
  "Your dreams matter 🌙",
  "You're one of a kind 💎",
  "Keep shining, Sir Ji ⭐",
  "You deserve the universe 🌌",
]

export default function SecretStars() {
  const [stars] = useState(() =>
    [...Array(80)].map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 3,
      msg: secrets[i % secrets.length],
    }))
  )
  const [active, setActive] = useState(null)

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-navy via-blue-950 to-black overflow-hidden py-20">
      <h2 className="font-serif text-4xl md:text-6xl text-center text-cream mb-4 relative z-10">
        Secret <span className="gold-text">Stars</span> ✨
      </h2>
      <p className="text-center font-hand text-2xl text-cream/70 mb-10 relative z-10">Click a star to reveal its secret</p>

      <div className="relative w-full h-[70vh]">
        {stars.map(s => (
          <motion.div
            key={s.id}
            onClick={() => setActive(s)}
            className="absolute cursor-pointer"
            style={{ top: `${s.top}%`, left: `${s.left}%` }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: s.delay }}
          >
            <div
              className="bg-softgold rounded-full shadow-lg"
              style={{ width: s.size * 2, height: s.size * 2, boxShadow: '0 0 10px #F5D78E' }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              className="glass-dark rounded-3xl p-10 max-w-md text-center"
            >
              <div className="text-6xl mb-4">⭐</div>
              <p className="font-hand text-3xl text-cream">{active.msg}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}