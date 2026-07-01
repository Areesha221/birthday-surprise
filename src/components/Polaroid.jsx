import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  { src: '/images/p1.jpg', caption: 'My favorite place is next to you 💙' },
  { src: '/images/p2.jpg', caption: 'The day I knew you were the one 🌹' },
  { src: '/images/p3.jpg', caption: 'My forever favorite memory 💕' },
  { src: '/images/p4.jpg', caption: 'My safe place, my home 🫂' },
  { src: '/images/p5.jpg', caption: 'Laughing with you is my therapy 😂❤️' },
  { src: '/images/p6.jpg', caption: 'Today, tomorrow, and always ✨' },
]

export default function Polaroid() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-beige to-cream relative">
      {/* String lights */}
      <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      {[...Array(12)].map((_, i) => (
        <div key={i} className="absolute top-10 w-3 h-3 rounded-full bg-softgold shadow-lg animate-twinkle"
             style={{ left: `${(i + 1) * 8}%`, animationDelay: `${i * 0.2}s` }} />
      ))}

      <h2 className="font-serif text-4xl md:text-6xl text-center text-navy mb-16 mt-10">
        Our <span className="gold-text">Beautiful Moments</span> 📸
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {photos.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: (i % 2 === 0 ? -3 : 3) }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            onClick={() => setSelected(p)}
            className="bg-white p-3 pb-12 shadow-2xl cursor-pointer relative"
            style={{ boxShadow: '0 10px 40px rgba(27,42,78,0.2)' }}
          >
            <img src={p.src} alt="" className="w-full h-48 object-cover"
                 onError={(e) => { e.target.src = `https://picsum.photos/400/300?random=${i}` }} />
            <p className="font-hand text-xl text-navy text-center mt-3">{p.caption}</p>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image Preview */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              src={selected.src}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              onError={(e) => { e.target.src = 'https://picsum.photos/800/600' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}