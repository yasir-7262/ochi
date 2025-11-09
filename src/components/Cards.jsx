
function Cards() {
  return (
    <div className="w-full flex gap-5 h-screen px-20 border-t-2 border-zinc-700 items-center bg-zinc-900">
     <div className="cardcontainer h-[60vh] w-1/2">
        <div className="card relative rounded-2xl  flex items-center justify-center w-full  h-full bg-[#004D43]">
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute border-[1px] rounded-3xl text-center px-3 py-2 left-7 text-sm bottom-5">&copy; 2023-2024 </button>
        </div>
        </div>   
     <div className="cardcontainer flex gap-5 h-[60vh] w-1/2">
        <div className="card relative rounded-2xl flex items-center justify-center w-1/2 h-full bg-[#212121]">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className="absolute border-[1px] rounded-3xl text-center px-3 py-2 left-7 text-sm bottom-5">RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="card  flex items-center justify-center relative rounded-2xl w-1/2 h-full bg-[#212121]">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className="absolute border-[1px] rounded-3xl text-center  p-2 text-sm left-7 bottom-5">BUISNESS BOOTCAMP ALUMNI </button>

        </div>
        
        </div>   
       
    </div>
  )
}

export default Cards
