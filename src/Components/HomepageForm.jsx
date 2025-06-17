import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const ContactForm = ({ page = 'default' }) => {
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    emailjs.init('OMoSpn_Pj_4xgb9S6'); // Your public key
  }, []);

  const handleServiceClick = (service) => setSelectedService(service);

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
    const cleanedValue = name === 'contact' ? value.replace(/\D/g, '').slice(0, 10) : value;
    setFormData((prev) => ({ ...prev, [name]: cleanedValue }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, cleanedValue) }));
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, val]) => {
      const error = validateField(key, val);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = 'service_t080o6s';
    const templateId = 'template_8kufyia';

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the errors in the form.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        contact: formData.contact,
        message: formData.message,
        service: selectedService,
        to_email: 'wixwave.co@gmail.com', // 👈 this is crucial if your template expects it
      });

      toast.success('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        company: '',
        contact: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('There was an error submitting the form.');
    } finally {
      setIsSubmitting(false);
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

          <motion.input
            ref={nameRef}
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

          <motion.input
            ref={emailRef}
            name="email"
            type="email"
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
            <motion.input
              ref={companyRef}
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

            <motion.input
              ref={contactRef}
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

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Choose Your Need</h3>
            <div className="flex flex-wrap gap-4">
              {services.map((service) => (
                <motion.button
                  type="button"
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

          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#050170] text-white hover:bg-[#5b38c2]'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'} <span className="text-lg">→</span>
            </motion.button>
          </motion.div>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </motion.section>
  );
};

export default ContactForm;
