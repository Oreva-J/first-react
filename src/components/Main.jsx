import React from 'react'

const Main = () => {
  return (
    <main className='w-full min-h-[80vh] bg-cover bg-center bg-[url("https://res.cloudinary.com/dnxovvjcz/image/upload/v1718030297/scandinavian-interior-mockup-wall-decal-background_1_y9u6be.png")] relative '>

    <div className='border w-[500px] h-[300px] bg-[#FFF3E3] absolute top-[120px] right-[100px] shadow-md rounded p-8 '>
        <h6 className='text-[#333333] font-bold ' >New arrival</h6>
        <h1 className=' text-[52px] text-[#B88E2F] font-bold leading-none '>Discover Our New Collection</h1>
        <p className='text-[#333333] font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ratione veritatis blanditiis dolorem!</p>
        <button className=' h-[74px] w-[222px] bg-[#B88E2F] mt-3 rounded shadow-sm text-white font-bold text-base '>Buy now</button>
    </div>
      
    </main>
  )
}

export default Main
