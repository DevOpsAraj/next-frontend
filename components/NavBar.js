import React from "react";

const NavBar = ({ profile }) => {
  return (
    <div className="bg-[#5540af]">
      <div>
        <div className="top-0 z-50 w-full py-3 sm:py-5 bg-primary ">
          <div className="container flex items-center justify-between mx-auto">
            <div className="">
              <a href="/">
                <h2 className="text-2xl font-bold text-white">
                  {profile.title}
                </h2>
              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
                <li className="pl-6 group">
                  <a
                    href="/#about"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    About
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="pl-6 group">
                  <a
                    href="/#services"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Skills
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="pl-6 group">
                  <a
                    href="/#portfolio"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Portfolio
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                {/* <li className="pl-6 group">
                  <a
                    href="/#clients"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Clients
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li> */}

                <li className="pl-6 group">
                  <a
                    href="/#work"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Work
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="pl-6 group">
                  <a
                    href="/#statistics"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Statistics
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="pl-6 group">
                  <a
                    href="/#blog"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Blog
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="pl-6 group">
                  <a
                    href="/#contact"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Contact
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </ul>
            </div>
            <div className="block lg:hidden">
              <button>
                <i className="text-4xl text-white bx bx-menu"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="fixed inset-0 min-h-screen transition-opacity bg-black opacity-0 pointer-events-none z-70 bg-opacity-70 lg:hidden" />
      </div>
    </div>
  );
};

export default NavBar;
