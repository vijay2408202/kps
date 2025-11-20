import { useState, useEffect } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { useTheme } from "../contexts/ThemeContext";
import { useScrollAnimation } from "../hooks/useCountAnimation";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { elementRef, isVisible } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Regular navbar for top of page */}
      <nav
        ref={elementRef}
        className={`w-full flex py-4 sm:py-6 px-4 sm:px-6 lg:px-8 justify-between items-center navbar relative transition-all duration-1000 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          } ${isVisible ? 'translate-y-0' : '-translate-y-4'}`}
      >
        <div className="flex items-center">
          <h1 className="font-poppins font-bold text-gray-900 dark:text-white text-[18px] xs:text-[20px] sm:text-[24px] leading-[24px] xs:leading-[28px] sm:leading-[32px]">
            <span className="sm:hidden">S3 Group</span>
            <span className="hidden sm:inline">S3 Group</span>
          </h1>
        </div>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} hover:text-blue-600 dark:hover:text-secondary transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <li className="ml-8">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </li>
        </ul>

        <div className="sm:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setToggle(!toggle)}
            className="p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${toggle ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
              <span className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${toggle ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
            </div>
          </button>

          {/* Mobile Dropdown Menu */}
          <div
            className={`${!toggle ? "hidden" : "flex"
              } fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm z-50 transition-all duration-300`}
            onClick={() => setToggle(false)}
          >
            <div
              className={`ml-auto w-[280px] xs:w-[320px] h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/50 dark:border-gray-700/50 shadow-2xl transform transition-transform duration-300 ${toggle ? 'translate-x-0' : 'translate-x-full'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                <h2 className="font-poppins font-bold text-gray-900 dark:text-white text-lg">
                  Krishna Protection
                </h2>
                <button
                  onClick={() => setToggle(false)}
                  className="p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="px-6 py-4">
                <ul className="space-y-1">
                  {navLinks.map((nav, index) => (
                    <li key={nav.id}>
                      <a
                        href={`#${nav.id}`}
                        className={`block w-full px-4 py-3 rounded-lg font-poppins font-medium text-left transition-all duration-300 ${active === nav.title
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
                          }`}
                        onClick={() => {
                          setActive(nav.title);
                          setToggle(false);
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`w-2 h-2 rounded-full transition-all duration-300 ${active === nav.title ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                            }`}></span>
                          <span>{nav.title}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-2">
                    S3 Group
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
                    Your Safety, Our Priority
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating navbar for scrolled state */}
      <div className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${isScrolled
        ? 'top-4 opacity-100 translate-y-0'
        : '-top-20 opacity-0 -translate-y-full'
        } w-[calc(100vw-2rem)] sm:w-full max-w-4xl`}>
        <nav className="mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-lg flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`font-poppins font-bold text-gray-900 dark:text-white transition-all duration-300 ${isScrolled ? 'text-[16px] xs:text-[18px] sm:text-[20px] leading-[20px] xs:leading-[24px] sm:leading-[28px]' : 'text-[18px] xs:text-[20px] sm:text-[24px] leading-[24px] xs:leading-[28px] sm:leading-[32px]'
              }`}>
              <span className="sm:hidden">S3 Group</span>
              <span className="hidden sm:inline">S3 Group</span>
            </h1>
          </div>

          <ul className={`list-none sm:flex hidden justify-end items-center flex-1 ${isScrolled ? 'space-x-6' : ''
            }`}>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-dimWhite"
                  } ${isScrolled
                    ? "hover:text-blue-600 dark:hover:text-blue-400"
                    : index === navLinks.length - 1 ? "mr-0" : "mr-10"
                  } hover:text-blue-600 dark:hover:text-secondary transition-colors`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            {/* Theme Toggle Button */}
            <li className={isScrolled ? "" : "ml-8"}>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-all duration-300 ${isScrolled ? 'backdrop-blur-sm' : ''
                  }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>

          <div className="sm:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-all duration-300 ${isScrolled ? 'backdrop-blur-sm' : ''
                }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setToggle(!toggle)}
              className={`p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-all duration-300 ${isScrolled ? 'backdrop-blur-sm' : ''
                }`}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${toggle ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                <span className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${toggle ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
              </div>
            </button>

            {/* Mobile Dropdown Menu for Floating Navbar */}
            <div
              className={`${!toggle ? "hidden" : "flex"
                } fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm z-50 transition-all duration-300`}
              onClick={() => setToggle(false)}
            >
              <div
                className={`ml-auto w-[280px] xs:w-[320px] h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/50 dark:border-gray-700/50 shadow-2xl transform transition-transform duration-300 ${toggle ? 'translate-x-0' : 'translate-x-full'
                  }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                  <h2 className="font-poppins font-bold text-gray-900 dark:text-white text-lg">
                    S3 Group
                  </h2>
                  <button
                    onClick={() => setToggle(false)}
                    className="p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="px-6 py-4">
                  <ul className="space-y-1">
                    {navLinks.map((nav, index) => (
                      <li key={nav.id}>
                        <a
                          href={`#${nav.id}`}
                          className={`block w-full px-4 py-3 rounded-lg font-poppins font-medium text-left transition-all duration-300 ${active === nav.title
                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
                            }`}
                          onClick={() => {
                            setActive(nav.title);
                            setToggle(false);
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <span className={`w-2 h-2 rounded-full transition-all duration-300 ${active === nav.title ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                              }`}></span>
                            <span>{nav.title}</span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-2">
                      S3 Group
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
                      Your Safety, Our Priority
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
