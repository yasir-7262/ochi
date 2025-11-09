import LocomotiveScroll from "locomotive-scroll"
import { useEffect, useState } from "react"

function Eyes() {
  const [rotate,setRotate]=useState(0)
  useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
      let mouseY =e.clientY;
      let mousex = e.clientX;
      let deltaX =mousex-window.innerWidth/2;
      let deltaY =mouseY-window.innerHeight/2;
      
      var angle = Math.atan2(deltaY,deltaX) *(180/Math.PI);
      setRotate(angle-180)
    })
  })
 new  LocomotiveScroll
  return ( 
    /*eyes part main */
   <div className="eyes w-full h-screen overflow-hidden">
  {/* background image */}
    <div data-scroll data-scroll-speed="-.6" className="relative w-full h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]">
 {/* eyes parent div */}
        <div className=" absolute flex gap-10  top-[50%] left-[50%]
        -translate-x-[50%]  -translate-y-[50%]">
{/*  left eye || parent */}
            <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                  {/* black eye left */} 
                   <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">

                    {/*its a line eyeleft */} 
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
                          {/* white small eye left */} 
                   <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                    </div>
                  
                   </div>
            </div>
 {/* right eye || parent */}           
            <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                 {/* black eye right */} 
                 <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                  {/*its a line eye right */} 
                  <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
                          
                          {/* white small eye rigth */} 
                   <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                    
                    </div>
                 </div>
            </div>

        </div>

    </div>

   </div>
  )
}

export default Eyes
