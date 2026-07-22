import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function GiftReveal() {
  const [opened, setOpened] = useState(false)

  const open = () => {
    setOpened(true)
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } })
    setTimeout(() => confetti({ particleCount: 150, angle: 60, spread: 55, origin: { x: 0 } }), 300)
    setTimeout(() => confetti({ particleCount: 150, angle: 120, spread: 55, origin: { x: 1 } }), 600)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-navy to-cream min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-navy mb-4">
          One Last <span className="gold-text">Surprise</span> 🎁
        </h2>
        <p className="font-hand text-2xl text-navy/70 mb-12">Click the gift to open</p>

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="gift"
              initial={{ scale: 0 }}
              animate={{ scale: 1, y: [0, -15, 0] }}
              exit={{ scale: 2, opacity: 0 }}
              transition={{ y: { duration: 2, repeat: Infinity } }}
              onClick={open}
              className="cursor-pointer inline-block relative"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-2xl border-4 border-gold relative mx-auto">
                <div className="absolute inset-x-0 top-1/2 h-6 bg-gold -translate-y-1/2" />
                <div className="absolute inset-y-0 left-1/2 w-6 bg-gold -translate-x-1/2" />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl">🎀</div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-3xl p-10 shadow-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-6"
              >
                💙
              </motion.div>
              <h3 className="font-script text-5xl gold-text mb-4">You are the gift, lrkiii</h3>
              <p className="font-hand text-2xl text-navy">
                You have no idea how incredibly special you are to me. I look at you and I just know I want this forever. Enjoy your surprise 😘❤️
              </p>
              <p className="font-hand text-2xl text-navy"> 
                Happy Birthday, lrkiii. 🎂
              </p>
              <img src="/images/sirji.jpg" alt=""
                   className="w-40 h-40 rounded-full mx-auto mt-6 border-4 border-gold object-cover"
                   onError={(e) => e.target.style.display='none'} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}