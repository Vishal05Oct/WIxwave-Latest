import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | Wixwave';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Return to our homepage to continue your journey.');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', window.location.origin + '/404');

    return () => {
      document.title = 'Wixwave - Web Development & Digital Solutions';
      metaDescription.setAttribute('content', 'Wixwave provides professional web development, mobile app development, and digital solutions to help businesses grow online.');
      canonicalLink.setAttribute('href', window.location.origin);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#01001c] to-[#0c34e9] flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center">
          <div className="mb-12">
            <h1 className="text-8xl font-bold text-white mb-4">
              ERROR 404
            </h1>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-blue-300">
                Oops! Page Not Found
              </h2>
              <p className="text-blue-100 max-w-md mx-auto">
                Looks like this page has gone on an adventure!
                Don't worry, we'll help you find your way back.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-white text-[#01001c] rounded-full
                hover:bg-blue-100 transform hover:scale-105 transition-all duration-300
                shadow-lg hover:shadow-blue-500/50 font-medium"
            >
              Return to Homepage
            </Link>
            <div className="text-blue-200 text-sm">
              Need assistance?{' '}
              <Link
                to="/contact"
                className="text-white hover:text-blue-100 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 