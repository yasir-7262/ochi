import { motion } from "framer-motion"


function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-10 mt-10 bg-[#004D43] rounded-tl-3xl  rounded-tr-3xl">
      <div className="text border-b-2 border-t-2 border-zinc-300  flex whitespace-nowrap   ">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity,duration:20 }} className="text-[13vw] font-[Founders_Grotesk condensed] font-bold uppercase -mb-15 pb-8 pr-20">WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity,duration:20}} className="text-[13vw] font-[Founders_Grotesk condensed] font-bold uppercase -mb-15 pb-8 pr-20">WE ARE OCHI</motion.h1>
     
      </div>
    </div>
  )
}

export default Marquee
