import React, { memo } from "react";

const TonicSection = memo(function TonicSection() {
    return (
        <div className="container mx-auto flex items-center justify-center bg-white px-4 py-8 overflow-hidden">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
                {/* Left Section */}
                <div className="container mx-auto">
                    <h2 className="font-light leading-tight text-black text-[5rem] sm:text-[6rem] md:text-[6rem]">
                        <span className="outlined-text">We're</span>
                        <br />
                        <span className="font-bold text-[#0c34e9]">Wixwave</span>
                    </h2>
                </div>

                {/* Right Section */}
                <div className="text-2xl text-gray-900 space-y-6">
                    <p>
                        Wixwave is a forward-thinking
                        <span className="highlight"> digital, creative, and technology</span> solutions partner for
                        <span className="highlight"> modern brands</span> looking to make an impact.
                    </p>
                    <p>
                        We blend strategy,
                        <span className="highlight"> innovation and design</span> to craft experiences that resonate and perform.
                    </p>
                </div>
            </div>
        </div>
    );
});

export default TonicSection;
