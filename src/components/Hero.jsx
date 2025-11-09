

function Hero() {
  return (
    <div className='w-full bg-[#CDEA68] p-20 rounded-tl-3xl text-black rounded-tr-3xl'>
      <h1 className="font-['Neue_Montreal'] text-[3vw]  leading-[4vw]">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className="w-full flex  gap-5 border-t-[1px]  pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2 ">
          <h1 className="text-5xl">Our approach:</h1>
          <button className="flex uppercase gap-10 items-center px-8 py-4 bg-zinc-900 mt-10 rounded-full text-white">Read More
          <div className="w-2 h-2 bg-zinc-100  rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] rounded-3xl overflow-hidden object-cover bg-[#b0c859]">
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="aboutpicture" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
