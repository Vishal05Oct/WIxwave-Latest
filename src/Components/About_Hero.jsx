import React from 'react';

const AboutWixwave = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
        
        {/* Background Banner Image */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />

        {/* Overlapping Large Lime Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 leading-[1] text-center text-lime-400 font-extrabold text-[8vw] sm:text-[6vw] lg:text-[4vw] pointer-events-none select-none">
          <span>Hello!</span>
          <span>We are creative</span>
          <span>Spaces</span>
        </div>

        {/* Foreground Content */}
        <div className="relative z-20 max-w-3xl text-center">
          <h2 className="font-bold tracking-[0.2em] text-black mb-4">
            ABOUT WIXWAVE
          </h2>
          <p className="text-xl sm:text-xl text-black leading-relaxed">
            We are a digital studio specialized in web design and mobile apps. Our team
            consists of experienced professionals who, over the years of working together,
            have built a deep knowledge of designing and implementing innovative digital projects.
            Our work is more than just work—it's our passion. That's why we create unique and
            engaging solutions that have been recognized and rewarded by various authorities.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutWixwave;
