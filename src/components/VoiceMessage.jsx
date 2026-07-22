import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause } from 'react-icons/fa'

export default function VoiceMessage() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [originalBgVolume, setOriginalBgVolume] = useState(0.3)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Save original volume and reduce background music
          if (window.bgMusic) {
            setOriginalBgVolume(window.bgMusic.volume)
            // Fade to very low volume (10%)
            const fadeInterval = setInterval(() => {
              if (window.bgMusic.volume > 0.1) {
                window.bgMusic.volume -= 0.05
              } else {
                clearInterval(fadeInterval)
              }
            }, 100)
          }
        } else {
          // Restore volume when scrolling away
          if (window.bgMusic) {
            window.bgMusic.volume = originalBgVolume
          }
        }
      },
      { threshold: 0.5 }
    )

    const el = document.getElementById('voice-message')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [originalBgVolume])

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play(); setPlaying(true) }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream to-navy min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="font-serif text-4xl md:text-6xl text-center text-navy mb-4">
          A Message For You <span className="gold-text">🎙️</span>
        </h2>
        <p className="text-center text-navy/70 mb-10 font-hand text-2xl">Press play, and listen with your heart 💙</p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex items-center gap-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggle}
              className="cursor-pointer w-20 h-20 rounded-full bg-gradient-to-br from-gold to-softgold flex items-center justify-center shadow-xl animate-glow"
            >
              {playing ? <FaPause className="text-navy text-2xl" /> : <FaPlay className="text-navy text-2xl ml-1" />}
            </motion.button>

            <div className="flex-1">
              <div className="flex items-end gap-1 h-16">
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gold rounded-full"
                    animate={{
                      height: playing ? [`${20 + Math.random() * 80}%`, `${20 + Math.random() * 80}%`] : '30%',
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: playing ? Infinity : 0,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>
              <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div className="h-full bg-gold" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

          <audio
            ref={audioRef}
            src="/audio/voice.mp3"
            onTimeUpdate={(e) => setProgress((e.target.currentTime / e.target.duration) * 100 || 0)}
            onEnded={() => setPlaying(false)}
          />
          <p className="text-center text-cream/80 mt-6 font-script text-xl">
            A voice just for you 💙
          </p>
        </motion.div>
      </div>
    </section>
  )
}