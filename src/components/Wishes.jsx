import { useState } from 'react'
import { motion } from 'framer-motion'

const wishes = [
  "May I always bring a smile to your face, just like you do for me every single day.",
  "I hope you know how deeply, completely, and unconditionally you are cherished as a friend.",
  "May every day bring you closer to your dreams — I'll always be right here cheering you on.",
  "You deserve all the happiness in the world, and I promise to be your biggest support every single day.",
  "May your heart always be as full and happy as you make mine feel.",
  "I hope you see yourself the way I see you — incredible, strong, and worthy of everything beautiful.",
  "May we continue to grow old together, making crazy memories and laughing until we cry.",
  "You are my favorite person today and for all my tomorrows. Happy Birthday, bestie! 🎂",
  "May your life be as amazing and beautiful as you make mine feel every day.",
  "I wish you endless happiness, massive success, and all the love in the world. 💙",
  "May you always feel as special and appreciated as you make me feel.",
  "Here's to another year of our friendship, of endless laughs, and of everything beautiful."
]

export default function Wishes() {
  const [revealed, setRevealed] = useState({})

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-beige to-cream relative overflow-hidden">
      <h2 className="font-serif text-4xl md:text-6xl text-center text-navy mb-12">
        Heartfelt Wishes For <span className="gold-text"> You </span> ❤️
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {wishes.map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => setRevealed({ ...revealed, [i]: true })}
            className="glass rounded-2xl p-6 shadow-xl cursor-pointer min-h-[180px] flex items-center justify-center text-center relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-6xl"
              animate={{ opacity: revealed[i] ? 0 : 1 }}
            >
              ⭐
            </motion.div>
            <motion.p
              className="font-hand text-xl text-navy"
              initial={{ opacity: 0 }}
              animate={{ opacity: revealed[i] ? 1 : 0 }}
            >
              "{w}"
            </motion.p>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}