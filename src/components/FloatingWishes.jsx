import { motion } from 'framer-motion'

const wishes = [
  "Keep Smiling ✨",
  "May happiness always find you 💙",
  "You deserve the very best 🌟",
  "The world is better because you're in it 🌍",
  "Never stop being amazing 💫",
  "Some people make life brighter just by existing ✨",
]

export default function FloatingWishes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {wishes.map((w, i) => (
        <motion.div
          key={i}
          className="absolute glass rounded-full px-4 py-2 font-hand text-lg text-navy shadow-lg"
          style={{
            top: `${10 + (i * 15) % 80}%`,
            left: `${(i * 17) % 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 1.5,
          }}
        >
          {w}
        </motion.div>
      ))}
    </div>
  )
}