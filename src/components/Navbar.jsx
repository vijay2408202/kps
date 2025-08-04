import { useState, useEffect } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
      <nav className={`w-full flex py-6 justify-between items-center navbar relative transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
        <div className="flex items-center">
          <h1 className="font-poppins font-bold text-gray-900 dark:text-white text-[24px] leading-[32px]">
            Krishna Protection
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

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-all duration-300 mr-4"
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

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar border border-gray-200/50 dark:border-gray-700/50 shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} hover:text-blue-600 dark:hover:text-secondary transition-colors`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Floating navbar for scrolled state */}
      <nav className={`fixed left-1/2 transform -translate-x-1/2 z-50 max-w-4xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-full px-8 py-4 shadow-lg transition-all duration-500 ease-out ${isScrolled
          ? 'top-4 opacity-100 translate-y-0'
          : '-top-20 opacity-0 -translate-y-full'
        } flex justify-between items-center w-full`}>
        <div className="flex items-center">
          <h1 className={`font-poppins font-bold text-gray-900 dark:text-white transition-all duration-300 ${isScrolled ? 'text-[20px] leading-[28px]' : 'text-[24px] leading-[32px]'
            }`}>
            Krishna Protection
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

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-all duration-300 mr-4 ${isScrolled ? 'backdrop-blur-sm' : ''
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

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg absolute ${isScrolled ? 'top-16' : 'top-20'
              } right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar border border-gray-200/50 dark:border-gray-700/50 shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} hover:text-blue-600 dark:hover:text-secondary transition-colors`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
