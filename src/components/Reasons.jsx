import { useState } from 'react'
import { motion } from 'framer-motion'

const reasons = [
  "You make me feel understood in ways I never imagined.",
  "Your hugs are my favorite place to be when I'm stressed.",
  "You always remember the little things that matter to me.",
  "You inspire me to be a better version of myself.",
  "Seeing your name pop up on my phone makes my whole day.",
  "You always have my back, no matter what happens.",
  "You listen to my endless rants like they're the most important thing.",
  "You make even the most boring days feel like an adventure.",
  "You're my ride-or-die, through absolutely everything.",
  "You stick by me even on my absolute worst days.",
  "Your laugh is literally my favorite sound in the world.",
  "You always know exactly how to make me laugh when I want to cry.",
  "You're the reason I believe in true, lifelong friendship.",
  "You see the real me, flaws and all, and you still choose to stay.",
  "You're my safe space and my biggest comfort zone.",
  "Being friends with you feels so easy and natural.",
  "You're my biggest cheerleader, even when I doubt myself.",
  "Finding you was the best thing that ever happened to me.",
  "You make my heart so full, every single day.",
  "I honestly can't imagine my life without you in it."
]

export default function Reasons() {
  const [revealed, setRevealed] = useState({})

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream to-beige">
      <h2 className="font-serif text-4xl md:text-6xl text-center text-navy mb-4">
        100 Reasons Why You're <span className="gold-text">Special</span>
      </h2>
      <p className="text-center font-hand text-2xl text-navy/70 mb-12">(Here are 20 to start — there are infinitely more 💙)</p>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setRevealed({ ...revealed, [i]: !revealed[i] })}
            className="cursor-pointer h-40 perspective-1000"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              animate={{ rotateY: revealed[i] ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-blue-900 rounded-xl flex items-center justify-center text-gold text-4xl font-serif shadow-xl"
                   style={{ backfaceVisibility: 'hidden' }}>
                #{i + 1}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-softgold rounded-xl flex items-center justify-center p-4 text-navy text-center font-hand text-lg shadow-xl"
                   style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                {r}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}