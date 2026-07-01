import { useState } from 'react'
import { motion } from 'framer-motion'

const reasons = [
  "You make me feel loved in ways I never imagined.",
  "Your arms are my favorite place to be.",
  "You remember the little things that matter to me.",
  "You make me want to be a better person.",
  "Your smile is the first thing I want to see every morning.",
  "You hold my hand like you'll never let go.",
  "You listen to my rants like they're the most important thing.",
  "You make ordinary moments feel magical.",
  "You're my person, through everything.",
  "You love me even on my worst days.",
  "Your voice is my favorite sound.",
  "You make me laugh when I don't even want to smile.",
  "You're the reason I believe in forever.",
  "You see me, really see me, and you stay.",
  "You're my safe place in a crazy world.",
  "You make love feel easy and natural.",
  "You're proud of me, even when I'm not proud of myself.",
  "You're the best decision I ever made.",
  "You make my heart skip, even now.",
  "I can't imagine my life without you in it.",
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