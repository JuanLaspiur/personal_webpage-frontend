import Image from 'next/image'
import React from 'react'

function Background({imageSrc="/solider.gif", imageAlt="Universe Background", gradientToTop=true}) {
  return (
    <div className='relatve'><Image
    src={imageSrc}
    alt={imageAlt}
    layout="fill"
    objectFit="cover"
   quality={100} 
  />  
   <div className="absolute inset-0 bg-black opacity-70 z-[1]"></div>
     <div className={`absolute inset-0 ${gradientToTop ? 'bg-gradient-to-t' : 'bg-gradient-to-b'} from-black via-transparent to-transparent  z-[1]`}></div>
   {!gradientToTop &&  <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent  z-[1]`}></div> }
     
     </div> 
     
  )
}

export default Background