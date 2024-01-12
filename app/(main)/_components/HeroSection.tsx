import Image from 'next/image';
import React from 'react';

function HeroSection() {
  return (
    <div className="flex flex-col justify-center max-w-5xl">
      <div className="flex items-center ">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image src="/education.jpg" fill className="object-contain " alt="Education" />
        </div>
        <div className="relative w-[300px] hidden md:flex h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image src="/education-1.jpg" fill className="object-contain " alt="Education-1" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
