import {
  FaSlack,
  FaMicrosoft,
  FaDiscourse,
  FaEnvelope,
  FaComments,
  FaWpforms,
  FaCode,
  FaWhatsapp
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const channels = [
  { name: 'SLACK', Icon: FaSlack },
  { name: 'MS TEAMS', Icon: FaMicrosoft },
  { name: 'DISCOURSE', Icon: FaDiscourse },
  { name: 'EMAIL', Icon: FaEnvelope },
  { name: 'CHAT', Icon: FaComments },
  { name: 'FORMS', Icon: FaWpforms },
  { name: 'API', Icon: FaCode },
  { name: 'WHATSAPP', Icon: FaWhatsapp }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function SupportChannels() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* Icons Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4 max-w-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {channels.map(({ name, Icon }) => (
            <motion.div
              key={name}
              className="flex flex-col items-center justify-center w-20 h-20 rounded-xl border shadow-sm bg-white
                hover:shadow-md transition transform"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}
              tabIndex={0}
              role="button"
              aria-label={`Support channel: ${name}`}
            >
              <Icon
                className="h-8 w-8"
                aria-hidden="true"
              />
              <span className="text-xs text-gray-600 mt-2 text-center select-none">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Text content */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-4xl font-semibold mb-4 leading-tight">
            Deliver <span className="font-bold">instant support</span><br />
            everywhere. From one place.
          </h2>
          <p className="text-gray-600 text-sm mt-4">
            Plain organizes and consolidates all your support channels. Work through your queue in one lightning-fast, beautiful interface.
          </p>
        </div>
      </div>
    </section>
  );
}
