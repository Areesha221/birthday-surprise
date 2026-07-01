import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MusicBox() {
  const audioRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [bgMusicWasPlaying, setBgMusicWasPlaying] = useState(false)

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    
    if (!open) {
      // Save background music state and STOP it
      if (window.bgMusic && !window.bgMusic.paused) {
        setBgMusicWasPlaying(true)
        window.bgMusic.pause()
      } else {
        setBgMusicWasPlaying(false)
      }
      a.volume = 0.4
      a.play()
      setOpen(true)
    } else {
      a.pause()
      setOpen(false)
      // Resume background music if it was playing
      if (bgMusicWasPlaying && window.bgMusic) {
        window.bgMusic.volume = 0.3
        window.bgMusic.play()
      }
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-navy to-cream min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto w-full text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-cream mb-12">
          Magical <span className="gold-text">Music Box</span> 🎵
        </h2>

        <motion.div
          onClick={toggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer inline-block relative"
        >
          <motion.div
            animate={{ rotateX: open ? -120 : 0 }}
            transition={{ duration: 1 }}
            className="w-48 h-24 bg-gradient-to-br from-red-900 to-red-700 rounded-t-lg border-2 border-gold origin-bottom mx-auto"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="text-gold text-center pt-8 font-script text-2xl">♪ ♫ ♪</div>
          </motion.div>
          <div className="w-52 h-32 bg-gradient-to-br from-red-800 to-red-950 rounded-b-lg border-2 border-gold -mt-1 mx-auto shadow-2xl flex items-center justify-center">
            <div className="text-gold text-4xl">🎁</div>
          </div>

          {open && [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: -150,
                x: (Math.random() - 0.5) * 200,
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              className="absolute top-0 left-1/2 text-2xl"
            >
              ✨
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          className="mt-10 font-script text-3xl gold-text"
        >
          This song always reminds me of you ❤️
        </motion.p>

        <audio ref={audioRef} src="/audio/song.mp3" loop />
      </div>
    </section>
  )
}