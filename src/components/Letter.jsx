import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const letterText = `Dear Sir Ji 💙✨,

Happy Birthday, my love! 🎂🎉

خدا کرے کہ تیری ہر دعا قبول ہو
تیری زندگی میں صرف روشنیاں ہی روشنیاں ہوں ✨🎂

Today is the day the universe gave me the greatest gift — YOU. 🎁✨

I still can't believe I get to call you mine. 🥺💍 You're not just my boyfriend; you're my best friend 🤞, my safe haven 🏠, my biggest supporter ‍♂️, and the reason behind so many of my smiles. 😊

Every day with you teaches me what love really means. 📖❤️ It's in the way you listen when I talk 👂, the way you hold me when I'm scared 🫂, the way you believe in me even when I doubt myself. 🌟

Thank you for loving me the way you do — patiently, completely, and unconditionally. 🥺 Thank you for being my calm in the chaos ️☕, my laughter on hard days 😂, and my favorite person to do absolutely nothing with. 🛋️💕

On your birthday, I want you to know: You are the best thing that's ever happened to me. 🏆✨ I'm so proud of the man you are, and so excited for all the beautiful moments still waiting for us. 🥂

I hope this year brings you happiness 😄, success 📈, peace of mind 🕊️, and countless reasons to smile. I hope every goal you work for gets a little closer , and every dream you carry finds its way to reality. 🌠

Most importantly, I hope you always remember how valuable and appreciated you are. 💎💙

Thank you for being part of so many beautiful memories. 📸🎞️

I love you more than words can say, today and always. ♾️❤️

Happy Birthday, my love. 🎂🎈

یہ بے خودی، یہ لبوں کی ہنسی مبارک ہو 🎉
تمہیں یہ سالگرہ کی خوشی مبارک ہو 🎂
اللہ پاک آپ کو ہمیشہ خوش و آباد رکھے 🤍


Forever yours 💙`

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
          Dear Sir Ji 
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