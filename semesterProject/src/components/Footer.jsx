const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-8">
    <div className="flex justify-between">
      <ul className="flex space-x-4">
        <li>Support</li>
        <li>Community</li>
        <li>Hosting</li>
        <li>About</li>
      </ul>
      <div className="flex space-x-4">
        {/* Social icons would go here */}
      </div>
    </div>
    <p className="text-center mt-4">&copy; 2024 Airbnb</p>
  </footer>
);

export default Footer;