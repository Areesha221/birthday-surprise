import { motion } from 'framer-motion'

const events = [
  { 
    title: 'First Time We Met 💕', 
    desc: 'The moment I saw you, I knew you were someone special 🥺. That nervous feeling 💓, those shy smiles 😊 — I still remember every detail 🌹.', 
    year: 'Chapter 1' 
  },
  { 
    title: 'When I Fell For You 💙', 
    desc: 'It wasn\'t just one moment ✨. It was your laugh 😄, your kindness 🤍, the way you made me feel safe 🫂. Slowly, quietly, you became my everything 💞.', 
    year: 'Chapter 2' 
  },
  { 
    title: 'When "Hi" Became "Good Morning, Love" 🌅', 
    desc: 'Those daily texts 📱, the good morning calls ☀️, the goodnight wishes 🌙 — you became the first and last thought of every day 💭💕.', 
    year: 'Chapter 3' 
  },
  { 
    title: 'Our First Date 🌹', 
    desc: 'I was so nervous I could barely eat 😅. But being with you felt so right 🥰, like I was exactly where I was meant to be 💫.', 
    year: 'Chapter 4' 
  },
  { 
    title: 'When You Held My Hand 🤝', 
    desc: 'Your hand in mine felt like a promise 💍. Like we were meant to walk through life together 👣, no matter what 💪❤️.', 
    year: 'Chapter 5' 
  },
  { 
    title: 'Every Ordinary Day With You 🕒', 
    desc: 'Even doing nothing with you feels like everything 🥰. Because with you, every moment is my favorite moment 💖✨.', 
    year: 'Chapter 6' 
  }
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-cream to-beige relative overflow-hidden">
      <h2 className="font-serif text-4xl md:text-6xl text-center text-navy mb-16">
        Our Journey <span className="gold-text">Together</span>
      </h2>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-navy to-gold hidden md:block" />

        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="w-full md:w-5/12">
              <div className="glass rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform">
                <div className="font-script text-xl gold-text mb-2">{e.year}</div>
                <h3 className="font-serif text-2xl text-navy mb-2">{e.title}</h3>
                <p className="text-navy/80">{e.desc}</p>
              </div>
            </div>
            <div className="hidden md:flex w-2/12 justify-center">
              <div className="w-6 h-6 rounded-full bg-gold border-4 border-cream shadow-lg animate-glow" />
            </div>
            <div className="w-full md:w-5/12" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}