import { pre } from "framer-motion/client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";


const slides = [
  {
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200",
    title: "Big Summer Sale!",
    subtitle: "Up to 50% Off",
  },
  {
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200",
    title: "Special Offer",
    subtitle: "Buy 1 Get 1 Free",
  },
  {
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200",
    title: "Flash Deal",
    subtitle: "Limited Time Only",
  },
];
const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev)=> (prev + 1) % slides.length);
      }, 3000);
        return () => clearInterval(timer);
  },[])
 
  return (
      <>
          <div className='main-slider bg-green-200 relative w-full h-64 md:h-120 overflow-hidden shadow-lg'>
              {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute w-1/2 right-0 h-full  bottom-1 flex space-y-7  flex-col items-center bg-black-200/30  bg-opacity-20  text-white p-4 rounded">
            <h2 className="text-2xl md:text-8xl text-yellow-400 font-bold leading-relaxed">{slide.title}</h2>
            <p className="text-lg md:text-4xl text-yellow-400">{slide.subtitle}</p>
                      </div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2  items-center justify  justify-items-center justify-center justify   text-white  opacity-40">
                          {
                              slides.map((_, index) => (
                                  <span key={index} className={`inline-block w-3 h-3 rounded-full mx-1 ${index === current ? 'bg-white' : 'bg-gray-400'}`}
                                  onclick={() => setCurrent(index)}
                                  ></span>
                              ))
                          }
                    
                       
                      </div>
                    
        </div>
      ))}
          </div>
      </>
  )
}

export default Slider