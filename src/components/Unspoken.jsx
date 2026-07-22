import { motion } from 'framer-motion'

const thoughts = [
  "I don't say it enough, but you're honestly the best thing that ever happened to me.",
  "Sometimes I look at you when you're not paying attention and think: How did I get so lucky to have a friend like you?",
  "The thought of a future without you scares me, because I can't imagine my life without my bestie.",
  "You make me believe in platonic soulmates and forever friendships.",
  "I love our friendship more every single day, even when I didn't think it was possible.",
  "Thank you for choosing to be my friend, through all the ups and downs.",
  "You're my favorite notification, my favorite call, and my favorite person to do absolutely nothing with.",
  "I never knew what true, unconditional friendship felt like until I met you.",
  "Our bond is worth every silly fight, every compromise, and every moment of patience.",
  "I'm so incredibly proud to call you my best friend."
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