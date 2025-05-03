import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState('UI / UX Design');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const services = [
    'UI / UX Design',
    'Web Development',
    'Branding Strategy',
    'Graphic Design & Illustration',
    'App Development',
    'SEO',
    'Performance Marketing',
  ];

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
      // Strip non-digits and limit to 10 digits
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
      // You can add your API submission logic here
    }
  };

  return (
    <section className="min-h-screen bg-white px-4 py-16">
      <div className="w-full max-w-screen-xl mx-auto">
        <form className="w-full space-y-10" onSubmit={handleSubmit}>
          <h2 className="text-center text-3xl sm:text-5xl md:text-6xl font-bold leading-snug text-black">
            Ready to redefine your <br className="sm:block hidden" />
            brand experience?
          </h2>

          <div className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border-b border-black placeholder-gray-400 text-base py-3 px-2 focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-b border-black placeholder-gray-400 text-base py-3 px-2 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full border-b border-black placeholder-gray-400 text-base py-3 px-2 focus:outline-none"
                />
                {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  inputMode="numeric"
                  maxLength={10}
                  className="w-full border-b border-black placeholder-gray-400 text-base py-3 px-2 focus:outline-none"
                />
                {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <p className="mb-4 font-medium text-base">Choose Your Need</p>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceClick(service)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border
                    ${
                      selectedService === service
                        ? 'bg-[#6c42f5] text-white border-[#6c42f5]'
                        : 'bg-gray-100 text-gray-800 border-transparent hover:bg-gray-200'
                    }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell Us About Your Project"
              className="w-full border-b border-black placeholder-gray-400 text-base py-3 px-2 h-28 resize-none focus:outline-none"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-[#6c42f5] text-white text-sm font-semibold rounded-full hover:bg-[#5b38c2] transition-all"
            >
              Submit <span className="text-lg">→</span>
            </button>
          </div>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </section>
  );
};

export default ContactForm;
