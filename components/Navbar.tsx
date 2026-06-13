export default function Navbar() {
  return (
    <nav className=" backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="/hacker.svg"
            alt="logo"
            className="w-12 h-12 hover:rotate-12 transition-transform duration-300"
          />
          
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#home"
            className="text-gray-300 hover:text-red-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-red-500 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-gray-300 hover:text-red-500 transition-colors duration-300"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-red-500 transition-colors duration-300"
          >
            Skills
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.svg"
              alt="github"
              className="w-10 h-10 bg-white rounded-full p-1 hover:scale-110 transition-transform duration-300"
            />
          </a>

          <button className="px-5 py-2 rounded-lg bg-red-500/20 text-white font-semibold hover:bg-red-600/20 hover:scale-105 transition-all duration-300">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}