import { motion } from 'framer-motion'

export default function FinalMessage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-cream via-beige to-navy flex items-center justify-center px-4 overflow-hidden">
      {/* Falling stars */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gold"
          style={{ left: `${Math.random() * 100}%` }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: '110vh', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ✦
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="text-center relative z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl mb-6"
        >
          💙
        </motion.div>
        <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6">
          Thank you for being part of my life,
        </h2>
        <h1 className="font-script text-6xl md:text-8xl gold-text mb-8">
          Sir Ji
        </h1>
        <p className="font-hand text-2xl text-navy/80 max-w-xl mx-auto">
          Today, tomorrow, and always — I'm grateful for you.
          Happy Birthday babezzzzzz. 🎂✨
        </p>
        <div className="mt-12 text-gold text-xl">— Forever your Lovee 💙</div>
      </motion.div>
    </section>
  )
}