import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiMenu, BiX } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Our Blogs', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const MenuIcon = ({ isOpen }) => (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {isOpen ? <BiX /> : <BiMenu />}
    </motion.div>
  );

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `cursor-pointer relative px-3 py-1 rounded-full transition-colors duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-white/20 to-white/10 font-semibold text-white'
        : 'text-gray-400'
    }`;
  };

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl">
      <div className="bg-[#01001c] rounded-full px-6 py-3 flex items-center justify-between container mx-auto shadow-xl backdrop-blur-sm">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png"
            alt="Logo"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        <ul className="hidden md:flex gap-6 relative text-sm font-medium">
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;

            return (
              <li key={label} className="cursor-pointer relative">
                <Link to={path} onClick={() => setIsOpen(false)}>
                  <motion.span
                    animate={{
                      color: isActive ? '#fff' : '#aaa',
                      scale: isActive ? 1.05 : 1,
                    }}
                    whileHover={{
                      scale: 1.08,
                      textShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative z-10 px-3 py-1 rounded-full"
                  >
                    {label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm shadow-inner"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <MenuIcon isOpen={isOpen} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="bg-black text-white md:hidden rounded-b-2xl mt-2 px-6 py-4 space-y-3 shadow-lg"
          >
            {navLinks.map(({ label, path }) => (
              <motion.li
                key={label}
                whileHover={{ scale: 1.05 }}
                className={getLinkClasses(path)}
              >
                <Link to={path} onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
