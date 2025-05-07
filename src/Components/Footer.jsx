import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#01001c] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo and Preview Section */}
        <div className="flex flex-wrap items-center justify-between mb-12">
          {/* Left-side Logo */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <img
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png"
              alt="TechDev Solutions Logo"
              className="h-16 object-contain mx-auto sm:mx-0"
            />
          </div>

          {/* Preview Section */}
          <div className="w-full sm:w-3/4 text-center sm:text-left">
            <h3 className="text-2xl font-semibold mb-4">Building the Future of Web & App Development</h3>
            <p className="text-gray-400">
              At wixwave, we specialize in creating high-performance websites and mobile apps tailored to your business needs. Our team ensures seamless user experiences and innovative designs that push boundaries.
            </p>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="flex flex-wrap justify-between">
          {/* Footer Left Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul>
              <li>
                <a href="/web-development" className="text-gray-400 hover:text-white">Web Development</a>
              </li>
              <li>
                <a href="/app-development" className="text-gray-400 hover:text-white">App Development</a>
              </li>
              <li>
                <a href="/ui-ux-design" className="text-gray-400 hover:text-white">UI/UX Design</a>
              </li>
              <li>
                <a href="/seo" className="text-gray-400 hover:text-white">Search Engine Optimisation</a>
              </li>
              <li>
                <a href="/e-commerce" className="text-gray-400 hover:text-white">Social Media Management</a>
              </li>
              <li>
                <a href="/e-commerce" className="text-gray-400 hover:text-white">Performance Marketing</a>
              </li>
            </ul>
          </div>

          {/* Footer Middle Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
            <li>
                <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
            <li>
                <a href="/blog" className="text-gray-400 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-white">Our Portfolio</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
              
            </ul>
          </div>

          {/* Footer Social Media Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6 justify-center sm:justify-start">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-2xl text-gray-400 hover:text-white"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-2xl text-gray-400 hover:text-white"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-2xl text-gray-400 hover:text-white"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-2xl text-gray-400 hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-4 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Wixwave. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
