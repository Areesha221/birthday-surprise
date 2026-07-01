import { motion } from 'framer-motion'

const thoughts = [
  "I never tell you enough, but you're the best thing that's ever happened to me.",
  "Sometimes I watch you when you're not looking and think: How did I get so lucky?",
  "I'm scared of a future without you, because I can't imagine one anymore.",
  "You make me believe in soulmates, in destiny, in forever.",
  "I fall for you more every single day, even when I didn't think it was possible.",
  "Thank you for choosing me, over and over again.",
  "You're my favorite notification, my favorite call, my favorite everything.",
  "I never knew what real love felt like until you.",
  "You're worth every fight, every compromise, every moment of patience.",
  "I'm so proud to call you mine.",
]

export default function Unspoken() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream to-navy min-h-screen">
      <h2 className="font-serif text-4xl md:text-6xl text-center text-navy mb-12">
        Things I Never Say <span className="gold-text">Out Loud</span> 💙
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {thoughts.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 shadow-xl relative"
          >
            <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-gold shadow-lg" />
            <p className="font-hand text-2xl text-navy pl-4">{t}</p>
            <div className="absolute inset-0 rounded-2xl bg-gold/5 animate-glow pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}