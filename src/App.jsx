import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className='h-dvh border border-red-500'></div>
    </main>
  )
}

export default App