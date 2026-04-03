import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa';

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
            <h3 className="text-2xl font-semibold mb-4">
              Building the Future of Web & App Development
            </h3>
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
                <Link to="/services/web-dev" className="text-gray-400 hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-dev" className="text-gray-400 hover:text-white">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-gray-400 hover:text-white">
                  Search Engine Optimisation
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-gray-400 hover:text-white">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/services/paid-ads" className="text-gray-400 hover:text-white">
                  Performance Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Middle Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Social Media Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6 justify-start sm:justify-start">
              <a
                href="https://x.com/Wixwave?t=aNUW1kl498Ht4V-7vT3wuA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter profile"
                className="text-gray-400 hover:text-white text-2xl focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/people/WixWave-The-Digital-Solutions/61570872845668/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-gray-400 hover:text-white text-2xl focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/wixwave/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn profile"
                className="text-gray-400 hover:text-white text-2xl focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/wixwave.co/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="text-gray-400 hover:text-white text-2xl focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.google.com/maps/place/Wixwave/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Google Business profile"
                className="text-gray-400 hover:text-white text-2xl focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                <FaGoogle />
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
};

export default Footer;
