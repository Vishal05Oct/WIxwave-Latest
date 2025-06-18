import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const ContactForm = ({ page = 'default' }) => {
  // Configuration
  const title = page === 'contact'
    ? 'Let’s Talk! Reach Out and Start the Conversation Today.'
    : 'Transform Your Vision Into Reality — Let’s Build Together!';

  // State management
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
  const navigate = useNavigate();

  // Services list
  const services = [
    'Website Design & Development',
    'Mobile App Design & Development',
    'Branding & Graphics',
    'Search Engine Optimisation',
    'Social Media Management',
    'Performance Marketing',
  ];

  // Intersection observers for animations
  const { ref: nameRef, inView: nameInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: emailRef, inView: emailInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: companyRef, inView: companyInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: messageRef, inView: messageInView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('OMoSpn_Pj_4xgb9S6');
  }, []);

  // Field validation
  const validateField = (name, value) => {
    const validations = {
      name: () => value.trim() ? '' : 'Name is required',
      email: () => {
        if (!value.trim()) return 'Email is required';
        if (!/^\S+@\S+\.\S+$/.test(value)) return 'Valid email required';
        return '';
      },
      company: () => value.trim() ? '' : 'Company name is required',
      contact: () => {
        if (!value.trim()) return 'Contact number is required';
        if (!/^\d{10}$/.test(value)) return '10-digit number required';
        return '';
      },
      message: () => value.trim() ? '' : 'Message is required',
    };
    return validations[name] ? validations[name]() : '';
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const cleanedValue = name === 'contact' 
      ? value.replace(/\D/g, '').slice(0, 10) 
      : value;
    
    setFormData(prev => ({ ...prev, [name]: cleanedValue }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, cleanedValue) }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const validationErrors = Object.entries(formData).reduce((acc, [key, value]) => {
      const error = validateField(key, value);
      if (error) acc[key] = error;
      return acc;
    }, {});

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please correct the highlighted fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data via EmailJS
      await emailjs.send('service_t080o6s', 'template_8kufyia', {
        ...formData,
        service: selectedService,
        to_email: 'wixwave.co@gmail.com',
      });

      // Success flow
      toast.success('Submission successful! Redirecting...');
      setFormData({
        name: '',
        email: '',
        company: '',
        contact: '',
        message: '',
      });
      
      // Immediate redirect with slight delay for toast visibility
      setTimeout(() => navigate('/thank-you'), 800);

    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="bg-white px-4 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="w-full space-y-8">
          {/* Form Title */}
          <motion.h2
            className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h2>

          {/* Name Field */}
          <motion.div
            ref={nameRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: nameInView ? 1 : 0, y: nameInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full p-3 border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 outline-none transition-colors`}
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
          </motion.div>

          {/* Email Field */}
          <motion.div
            ref={emailRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: emailInView ? 1 : 0, y: emailInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full p-3 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 outline-none transition-colors`}
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
          </motion.div>

          {/* Company & Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              ref={companyRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: companyInView ? 1 : 0, y: companyInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className={`w-full p-3 border-b-2 ${errors.company ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 outline-none transition-colors`}
              />
              {errors.company && <p className="mt-1 text-red-500 text-sm">{errors.company}</p>}
            </motion.div>

            <motion.div
              ref={contactRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <input
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Phone Number"
                inputMode="numeric"
                maxLength={10}
                className={`w-full p-3 border-b-2 ${errors.contact ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 outline-none transition-colors`}
              />
              {errors.contact && <p className="mt-1 text-red-500 text-sm">{errors.contact}</p>}
            </motion.div>
          </div>

          {/* Services Selection */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-4"
          >
            <h3 className="text-lg font-medium mb-3">What service are you interested in?</h3>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <motion.button
                  key={service}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedService === service
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {service}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Message Field */}
          <motion.div
            ref={messageRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: messageInView ? 1 : 0, y: messageInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-4"
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={4}
              className={`w-full p-3 border-2 rounded-lg ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 outline-none transition-colors`}
            />
            {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-end pt-6"
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-full font-medium text-white flex items-center gap-2 ${
                isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
              } transition-colors`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Submit Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </motion.button>
          </motion.div>
        </form>
        
        {/* Toast Container */}
        <ToastContainer 
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </motion.section>
  );
};

export default ContactForm;