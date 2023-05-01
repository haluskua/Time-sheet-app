import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* By{" "} */}
            <Image
              src="/images/stc-logo.png"
              alt="company Logo"
              className="dark:invert"
              width={60}
              height={24}
              priority
            />
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-gray-800 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Get started
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    // <header className=" bg-[#221b1b33]/40 rounded-full sm:rounded-sm md:rounded-md drop-shadow-[#f7abba]-lg sm:filter-none sticky top-0 flex  items-start justify-between min-h-0 max-w z-999999 xl:items-center p-5 z-9999">
    //   <motion.div
    //     initial={{ x: -500, opacity: 0, scale: 0 }}
    //     animate={{ x: 0, opacity: 1, scale: 1 }}
    //     transition={{ duration: 1.4 }}
    //     className="flex flex-row items-center"
    //   >
    //     {/* Social Icons*/}
    //     <SocialIcon
    //       url="https://www.linkedin.com/in/haluskua-77/"
    //       fgColor="#e48ac1d2"
    //       bgColor="transparent"
    //     />
    //     <SocialIcon
    //       url="https://www.linkedin.com/in/haluskua-77/"
    //       fgColor="#64bcf7ab"
    //       bgColor="transparent"
    //     />
    //     <SocialIcon
    //       url="https://www.linkedin.com/in/haluskua-77/"
    //       fgColor="#ece38cab"
    //       bgColor="transparent"
    //     />
    //   </motion.div>
    //   {/* <div> */}
    //   <Link href="#contact">
    //     <motion.div
    //       initial={{ x: 500, opacity: 0, scale: 0 }}
    //       animate={{ x: 0, opacity: 1, scale: 1 }}
    //       transition={{ duration: 1.5 }}
    //       className="drop-shadow-3xl min-w-max flex flex-row items-center text-[#fff9f9] cursor-pointer rounded-full  p-2 bg-[#237cb8] hover:bg-[#58abe2] hover:text-white z-9999999"
    //     >
    //       <SocialIcon
    //         className="cursor-pointer  h-5 w-5 mr-3 hover:animate-bounce motion-reduce"
    //         network="email"
    //         fgColor="#e9d0d5ab"
    //         bgColor="transparent"
    //       />
    //       <span className="uppercase hidden md:inline-flex text-sm hover:text-white ">
    //         Get In Touch
    //       </span>
    //     </motion.div>
    //   </Link>
    //   {/* </div> */}
    // </header>
  );
};

export default Header;
