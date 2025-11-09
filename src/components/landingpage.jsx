import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { FaArrowUpLong } from "react-icons/fa6";
function Landingpage() {
        new LocomotiveScroll
  return  (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        <div className="masker">
          <h1 className="uppercase leading-[5.7vw] tracking-tighter text-[8vw] font-['Founders_Grotesk condensed'] font-bold">
            We Create{" "}
          </h1>
        </div>

        <div className="masker">
            <div className="w-fit flex items-center  ">
               <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1.5}} className="w-[8vw] relative rounded-md mb-3 top-[1vw] h-[5.7vw] overflow-hidden ">
                <img className="bg-start  " src="data:image/jpeg;base64,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" alt="" />
               </motion.div>

            <h1 className="mr-[1vw] uppercase leading-[7.5vw]  text-[8vw]  font-['Founders_Grotesk condensed'] tracking-tight font-bold">
            Eye Opening{" "}
          </h1>
            </div>
         
        </div>

        <div className="masker">
          <h1 className="uppercase leading-[5.7vw] tracking-tighter text-[8vw]  font-['Founders_Grotesk condensed'] font-bold">
            Presentations{""}
          </h1>
        </div>
      </div>
      <div className="border-t-2 border-zinc-800 mt-20 flex    justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-4">
            <div className="px-5 py-2 border-[1px] rounded-full border-zinc-500 font-light text-md uppercase" > Start the project</div>
            <div className="w-8 h-8 flex justify-center items-center border-[1px] border-zinc-400 rounded-full"><span className="rotate-[45deg]"><FaArrowUpLong/></span></div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
