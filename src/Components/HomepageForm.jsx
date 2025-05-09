import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ page = 'default' }) => {
  // Dynamic title based on the page prop
  const title =
    page === 'contact'
      ? 'Let’s Talk! Reach Out and Start the Conversation Today.'
      : 'Transform Your Vision Into Reality — Let’s Build Together!';

  const [selectedService, setSelectedService] = useState('Website Design & Development');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const services = [
    'Website Design & Development',
    'Mobile App Design & Development',
    'Branding & Graphics',
    'Search Engine Optimisation',
    'Social Media Management',
    'Performance Marketing',
  ];

  const { ref: nameRef, inView: nameInView } = useInView({ triggerOnce: true });
  const { ref: emailRef, inView: emailInView } = useInView({ triggerOnce: true });
  const { ref: companyRef, inView: companyInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });
  const { ref: messageRef, inView: messageInView } = useInView({ triggerOnce: true });

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required.';
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid.';
        return '';
      case 'company':
        return value.trim() ? '' : 'Company name is required.';
      case 'contact':
        if (!value.trim()) return 'Contact number is required.';
        if (!/^\d{10}$/.test(value)) return 'Contact number must be exactly 10 digits.';
        return '';
      case 'message':
        return value.trim() ? '' : 'Message is required.';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'contact') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
        const error = validateField(name, numericValue);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) newErrors[name] = error;
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the errors in the form.');
    } else {
      toast.success('Form submitted successfully!');
      // Optionally handle submission here
    }
  };

  return (
    <motion.section
      className="bg-white px-4 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <form className="w-full space-y-10" onSubmit={handleSubmit}>
          <motion.h2
            className="text-center text-3xl sm:text-5xl md:text-6xl font-bold leading-snug text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h2>

          {/* Name Field */}
          <motion.input
            ref={nameRef}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border-b border-black placeholder-gray-400 text-base py-3 px-2 focus:outline-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: nameInView ? 1 : 0, y: nameInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          {/* Email Field */}
          <motion.input
            ref={emailRef}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border-b border-black placeholder-gray-400 text-base py-3 px-2 focus:outline-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: emailInView ? 1 : 0, y: emailInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Company Field */}
            <motion.input
              ref={companyRef}
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company/Brand Name"
              className="w-full border-b border-black placeholder-gray-400 text-base py-3 px-2 focus:outline-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: companyInView ? 1 : 0, y: companyInView ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}

            {/* Contact Field */}
            <motion.input
              ref={contactRef}
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              inputMode="numeric"
              maxLength={10}
              className="w-full border-b border-black placeholder-gray-400 text-base py-3 px-2 focus:outline-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            />
            {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
          </div>

          {/* Choose Your Need */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Choose Your Need</h3>
            <div className="flex flex-wrap gap-4">
              {services.map((service) => (
                <motion.button
                  key={service}
                  onClick={() => handleServiceClick(service)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedService === service
                      ? 'bg-[#050170] text-white'
                      : 'bg-gray-200 text-black'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Message Field */}
          <motion.textarea
            ref={messageRef}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell Us About Your Project"
            className="w-full border-b border-black placeholder-gray-400 text-base py-3 px-2 h-28 resize-none focus:outline-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: messageInView ? 1 : 0, y: messageInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          ></motion.textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          {/* Submit Button */}
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#050170] text-white text-sm font-semibold rounded-full hover:bg-[#5b38c2] transition-all"
            >
              Submit <span className="text-lg">→</span>
            </motion.button>
          </motion.div>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </motion.section>
  );
};

export default ContactForm;
