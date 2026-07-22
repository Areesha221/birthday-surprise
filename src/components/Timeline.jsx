import { motion } from 'framer-motion'

const events = [
  { 
    title: 'First Time We Met 💕', 
    desc: 'The moment our paths crossed, I knew we were going to be great friends. That nervous feeling, those shy smiles — I still remember every detail 🌹.', 
    year: 'Chapter 1' 
  },
  { 
    title: 'When We Became Besties 👯‍♀️', 
    desc: 'It wasn\'t just one moment. It was your laugh, your kindness, the way you made me feel understood. Slowly, quietly, you became my absolute favorite person 💞.', 
    year: 'Chapter 2' 
  },
  { 
    title: 'Our Crazy Adventures & Inside Jokes 🤪', 
    desc: 'From random late-night calls 📱 to our endless laughing fits 😂. You are the only one who truly gets my weirdness, and I wouldn\'t have it any other way 💭💕.', 
    year: 'Chapter 3' 
  },
  { 
    title: 'Through Thick and Thin 🫂', 
    desc: 'When things got tough, you were my rock. Your support, your patience, and your unconditional love made every storm feel like a gentle breeze 🌈💪.', 
    year: 'Chapter 4' 
  },
  { 
    title: 'Celebrating Every Little Win 🥂', 
    desc: 'Whether it was a small achievement or a big milestone, you were always my biggest cheerleader. Celebrating with you makes everything twice as special ✨.', 
    year: 'Chapter 5' 
  },
  { 
    title: 'Forever & Always ♾️', 
    desc: 'Even doing nothing with you feels like everything. Because with you, every ordinary moment turns into my favorite memory 💖✨.', 
    year: 'Chapter 6' 
  }
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 md:py-20 px-4 bg-gradient-to-b from-cream to-beige relative overflow-hidden">
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center text-navy mb-12 md:mb-16 px-4">
        Our Journey <span className="gold-text">Together</span>
      </h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Desktop Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-navy to-gold hidden md:block" />

        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center mb-10 md:mb-12 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Mobile Timeline Indicator (Left side line & dot) */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold/50 to-transparent md:hidden" />
            <div className="absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-gold md:hidden" />

            {/* Content Card */}
            <div className="w-full md:w-5/12 pl-6 md:pl-0">
              <div className="glass rounded-2xl p-5 md:p-6 shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-gold/20">
                <div className="font-script text-lg md:text-xl gold-text mb-2">{e.year}</div>
                <h3 className="font-serif text-xl md:text-2xl text-navy mb-2 font-semibold">{e.title}</h3>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">{e.desc}</p>
              </div>
            </div>

            {/* Desktop Center Dot */}
            <div className="hidden md:flex w-2/12 justify-center">
              <div className="w-5 h-5 rounded-full bg-gold border-4 border-cream shadow-lg animate-glow z-10" />
            </div>

            {/* Desktop Spacer (for alternating layout) */}
            <div className="hidden md:block w-full md:w-5/12" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}