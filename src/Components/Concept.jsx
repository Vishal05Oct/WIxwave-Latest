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
  { name: 'SLACK', Icon: FaSlack, color: 'text-[#611f69]' },
  { name: 'MS TEAMS', Icon: FaMicrosoft, color: 'text-[#464EB8]' },
  { name: 'DISCOURSE', Icon: FaDiscourse, color: 'text-[#000000]' },
  { name: 'EMAIL', Icon: FaEnvelope, color: 'text-red-500' },
  { name: 'CHAT', Icon: FaComments, color: 'text-blue-500' },
  { name: 'FORMS', Icon: FaWpforms, color: 'text-orange-500' },
  { name: 'API', Icon: FaCode, color: 'text-indigo-500' },
  { name: 'WHATSAPP', Icon: FaWhatsapp, color: 'text-green-500' }
];

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export default function SupportChannels() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-md">
          {channels.map(({ name, Icon, color }, index) => (
            <motion.div
              key={name}
              className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border shadow-sm bg-white hover:shadow-md transition"
              title={name}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.05 }}
            >
              <Icon className={`h-8 w-8 ${color}`} aria-label={name} />
              <span className="text-xs text-gray-600 mt-2 text-center">{name}</span>
            </motion.div>
          ))}
        </div>

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
