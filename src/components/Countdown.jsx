import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

// Update the birthday date
const BIRTHDAY = new Date('2026-09-08T00:00:00');

export default function Countdown() {
  const [time, setTime] = useState({})
  const [done, setDone] = useState(false)

  useEffect(() => {
    const tick = () => {
      const diff = BIRTHDAY - new Date()
      if (diff <= 0) {
        setDone(true)
        if (!window.confettiFired) {
          window.confettiFired = true
          confetti({ particleCount: 300, spread: 160, origin: { y: 0.5 } })
        }
        return
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        mins: Math.floor((diff / 60000) % 60),
        secs: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-black to-navy min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream mb-8 md:mb-12 px-4">
          {done ? ' The Day Is Here! 🎉' : 'Counting Down To Your Day'}
        </h2>

        {done ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="font-script text-4xl md:text-6xl lg:text-8xl gold-text"
          >
            Happy Birthday! 🎂
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {['days', 'hours', 'mins', 'secs'].map(u => (
              <motion.div
                key={u}
                whileHover={{ scale: 1.05 }}
                className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl"
              >
                <div className="font-serif text-3xl sm:text-5xl lg:text-7xl gold-text">
                  {String(time[u] || 0).padStart(2, '0')}
                </div>
                <div className="text-cream/70 font-hand text-sm sm:text-xl mt-2 uppercase">{u}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
} 