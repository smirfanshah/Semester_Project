import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-100 text-black p-8 mt-8">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between">
        {/* Support Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Support</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">Help Center</a>
            </li>
            <li>
              <a href="#" className="hover:underline">AirCover</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Anti-discrimination</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Disability support</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Cancellation options</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Report neighborhood concern</a>
            </li>
          </ul>
        </div>

        {/* Hosting Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Hosting</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">Airbnb your home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">AirCover for Hosts</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Hosting resources</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Community forum</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Hosting responsibly</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Airbnb-friendly apartments</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Join a free Hosting class</a>
            </li>
          </ul>
        </div>

        {/* Airbnb Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Airbnb</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">Newsroom</a>
            </li>
            <li>
              <a href="#" className="hover:underline">New features</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Careers</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Investors</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Gift cards</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Airbnb.org emergency stays</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Airbnb, Inc.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Your Privacy Choices</a>
          </div>
          <div className="flex space-x-4">
            <span>Choose a language: English (US)</span>
            <span>Choose a currency: € EUR</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-4 space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 text-gray-500 hover:text-blue-600" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 text-gray-500 hover:text-blue-400" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-gray-500 hover:text-pink-500" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
