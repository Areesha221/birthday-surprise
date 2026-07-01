import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [isHovering, setIsHovering] = useState(false)
  const [particles, setParticles] = useState([])

  const springX = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 })
  const springY = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 })

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      springX.set(x)
      springY.set(y)

      if (Math.random() > 0.7) {
        const id = Date.now() + Math.random()
        setParticles((prev) => [
          ...prev.slice(-12),
          { id, x, y, size: Math.random() * 4 + 2 },
        ])
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id))
        }, 800)
      }

      const target = e.target
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.classList?.contains('cursor-pointer')

      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [springX, springY])

  return (
    <>
      {/* Main Custom Cursor - Z-index increased to 99999 */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Outer Aura */}
        <motion.div
          animate={{
            scale: isHovering ? 3 : 1,
            opacity: isHovering ? 0.8 : 0.4,
            width: isHovering ? 80 : 40,
            height: isHovering ? 80 : 40,
          }}
          transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.6) 0%, rgba(245,215,142,0.2) 50%, transparent 80%)',
            filter: 'blur(15px)',
            boxShadow: isHovering ? '0 0 30px #D4AF37' : '0 0 15px #F5D78E',
          }}
        />

        {/* Inner Core Dot */}
        <motion.div
          animate={{
            scale: isHovering ? 0.5 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="absolute rounded-full bg-white"
          style={{
            width: 8,
            height: 8,
            left: -4,
            top: -4,
            boxShadow: '0 0 10px #ffffff, 0 0 20px #D4AF37',
          }}
        />
      </motion.div>

      {/* Gold Particle Trail - Z-index increased to 99998 */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: 'radial-gradient(circle, #F5D78E, #D4AF37)',
            boxShadow: '0 0 5px #D4AF37',
          }}
          initial={{ x: p.x, y: p.y, opacity: 1, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            y: p.y - 20,
            x: p.x + (Math.random() - 0.5) * 20,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      ))}
    </>
  )
}