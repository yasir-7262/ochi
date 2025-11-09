
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Landingpage from './components/landingpage';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {


  new LocomotiveScroll()
  
  return (
    <div className='w-full  scroll-smooth min-h-screen bg-zinc-900  text-white '>
     
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <Hero/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App;
