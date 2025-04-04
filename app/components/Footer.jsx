const Footer = () => {
  return (
    <footer className="bg-background text-color-text-inverse py-6 mt-5 rounded-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl  font-bold text-primary-text ">
              BadiDukan
            </h2>
            <p  className="text-sm font-bold text-secondary-text ">
              &copy; 2025 BadiDukan. All rights reserved.</p>
          </div>

          {/* Center Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-sm  hover:underline text-secondary-text" >About Us</a>
            <a href="#" className="text-sm hover:underline text-secondary-text" >Contact</a>
            <a href="#" className="text-sm hover:underline text-secondary-text" >Privacy Policy</a>
            <a href="#" className="text-sm hover:underline text-secondary-text" >Terms of Service</a>
          </div>

          {/* Right Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-color-info" aria-label="LinkedIn">
              <img src="linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>

            <a href="#" className="hover:text-color-primary" aria-label="Facebook">
              <img src="facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>

            <a href="#" className="hover:text-color-info" aria-label="Twitter">
              <img src="twitter.png" alt="Twitter" className="w-6 h-6" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;