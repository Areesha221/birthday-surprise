import { useEffect, useRef } from 'react'
import CursorGlow from './components/CursorGlow'
import BackToTop from './components/BackToTop' 
import Landing from './components/Landing'
import Letter from './components/Letter'
import Timeline from './components/Timeline'
import Polaroid from './components/Polaroid'
import VoiceMessage from './components/VoiceMessage'
import MusicBox from './components/MusicBox'
import Reasons from './components/Reasons'
import Wishes from './components/Wishes'
import Unspoken from './components/Unspoken'
import SecretStars from './components/SecretStars'
import Countdown from './components/Countdown'
import GiftReveal from './components/GiftReveal'
import FinalMessage from './components/FinalMessage'
import FloatingWishes from './components/FloatingWishes'

export default function App() {
  const bgMusicRef = useRef(null)

  useEffect(() => {
    // Expose background music to window for global control
    window.bgMusic = bgMusicRef.current
    return () => {
      if (window.bgMusic) {
        window.bgMusic.pause()
      }
    }
  }, [])
  return (
    <div className="relative cursor-none">
      <CursorGlow />
      <BackToTop />
      <FloatingWishes />
      <Landing />
      <Letter />
      <Timeline />
      <Polaroid />
      <VoiceMessage />
      <MusicBox />
      <Reasons />
      <Wishes />
      <Unspoken />
      <SecretStars />
      <Countdown />
      <GiftReveal />
      <FinalMessage />
      
      {/* Global Background Music */}
      <audio 
        ref={bgMusicRef} 
        src="/audio/background.mp3" 
        loop 
        preload="auto"
      />
    </div>
  )
}