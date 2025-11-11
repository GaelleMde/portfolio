import React from 'react'

function Hero() {
  return (
    <section className="h-screen w-full relative">
      <img src="/images/Frame 17.svg"
       alt="Gaëlle's photo and colorful band"
       className=" w-full h-full object-cover object-center" />

       < img src="/images/WebDeveloper.svg"
        alt="text web developer " 
        className=" absolute top-1/2 lg:left-1/3 -translate-x-1/2 -translate-y-1/2 lg:w-[50%]"/> 
       </section>
  )
}

export default Hero