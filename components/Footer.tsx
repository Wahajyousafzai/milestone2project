import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      href: 'https://twitter.com',
      label: 'Twitter',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Wave SVG */}
        <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
          <svg className="w-full h-8" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0v48z" fill="currentColor" className="text-gray-900"/>
          </svg>
        </div>

        <div className="py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Your Name</h3>
              <p className="text-sm">
                Building amazing web experiences with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <nav className="space-y-3">
                <Link href="/" className="block hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/contact" className="block hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-center text-sm text-gray-400">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 