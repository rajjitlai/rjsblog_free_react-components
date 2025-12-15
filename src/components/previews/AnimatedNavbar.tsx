const AnimatedNavbar = () => {
  const links = ['Home', 'About', 'Projects', 'Contact'];
  
  return (
    <nav className="flex items-center gap-8 px-8 py-4 bg-gray-900/80 backdrop-blur-md rounded-full border border-gray-800">
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="relative text-gray-400 hover:text-white transition-colors duration-300
            after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
            after:bg-green-400 after:transition-all after:duration-300
            hover:after:w-full"
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default AnimatedNavbar;
