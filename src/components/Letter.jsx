import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const letterText = `Dear [Friend's Name] 💕,

Happy Birthday! 🎂✨

Today is the day the universe gave me an amazing friend — YOU! 💙

I still can't believe how lucky I am to have you in my life. You're not just my friend; you're my confidant, my partner-in-crime, my biggest supporter, and the reason behind so many of my smiles. 😊

Every day with you as my friend teaches me what true friendship means. It's in the way you listen when I talk , the way you support me when I'm down 🫂, the way you believe in me even when I doubt myself. 🌟

Thank you for being such an incredible friend — patiently, completely, and unconditionally. Thank you for being my calm in the chaos ☕, my laughter on hard days 😂, and my favorite person to do absolutely nothing with. 🛋️💕

On your birthday, I want you to know: You are the best friend anyone could ask for. 🏆✨ I'm so proud of the person you are, and so excited for all the beautiful moments still waiting for us. 

I hope this year brings you happiness 😄, success 📈, peace of mind 🕊️, and countless reasons to smile. I hope every goal you work for gets a little closer, and every dream you carry finds its way to reality. 🌠

Most importantly, I hope you always remember how valuable and appreciated you are. 💎💙

Thank you for being part of so many beautiful memories. 🎞️

I value our friendship more than words can say, today and always. ♾️💕

Happy Birthday, my dear friend! 🎂🎈

تم میری ہر خوشی کا راز ہو 🤍
میرے دل کے سکون کا احساس ہو ✨
خدا کرے کہ ہمیشہ یونہی مسکراتے رہو تم 😊

Forever your friend 💙`

export default function Letter() {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const textContainerRef = useRef(null) 

  // Detect when the letter section is visible to start typing
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) setStarted(true) 
      },
      { threshold: 0.3 }
    )
    const el = document.getElementById('letter')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Auto-scroll the container as text is typed
  useEffect(() => {
    if (textContainerRef.current) {
      textContainerRef.current.scrollTo({
        top: textContainerRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [displayed])

  // Typewriter effect with 1.5s pause
  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      if (i <= letterText.length) {
        setDisplayed(letterText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          const timeline = document.getElementById('timeline')
          if (timeline) {
            timeline.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 1000) 
      }
    }, 30) 
    return () => clearInterval(interval)
  }, [started])

  return (
    <section id="letter" className="min-h-screen py-20 px-4 flex items-center justify-center paper-texture relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full glass rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <h2 className="font-script text-5xl md:text-6xl text-navy mb-8 text-center">
          Dear Friend 💕,
        </h2>
        
        {/* Text Container with Auto-Scroll */}
        <div
          ref={textContainerRef}
          className="font-hand text-xl md:text-2xl text-navy leading-relaxed whitespace-pre-wrap min-h-[300px] max-h-[60vh] overflow-y-auto pr-4 letter-scroll"
        >
          {displayed}
          <span className="inline-block w-0.5 h-6 bg-gold animate-pulse ml-1 align-middle" />
        </div>

        <div className="mt-8 text-center font-script text-2xl gold-text">
          — With all my heart 💕
        </div>
      </motion.div>
    </section>
  )
}