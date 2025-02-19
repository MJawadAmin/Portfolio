import { useState } from "react";
import { motion } from "motion/react";
import nfts from "../images/nfts.PNG";
import nfts2 from "../images/nfts2.PNG";
import pandatap from "../images/pandatap.PNG";
import realeste from "../images/realestate.PNG";
import FigmaToreact from "../images/figmatoreact.PNG";
import react from "../Tools/react.svg";
import nodejs from "../Tools/nodejs.svg";
import tailwind from "../Tools/tailwind.svg";
import framer from "../Tools/framer.svg";
import MongoDB from "../Tools/mongodb.svg";
import firbase from "../Tools/firsebase.svg";
import bootstrap from "../Tools/bootsrap.svg";
import figma from "../Tools/figma.svg";
import github from "../Tools/github-svgrepo-com.svg";
import live from "../Tools/live.svg";

const Projects = () => {
  const [showWebProjects, setShowWebProjects] = useState(false);

  return (
    <div className="md:px-40 px-8 lg:mt-9 md:mt-6 mt-4 w-full">
      <div className="space-y-3">
        <div>
          <p className="md:text-2xl font-bold font-mono text-black dark:text-white">
            Projects
          </p>
        </div>
        <div className="space-x-3">
          <button
            className={` p-2 bg-[#999797]  rounded-md text-white  font-mono dark:text-black ${
              showWebProjects
                ? "bg-[#525252] hover:bg-black dark:hover:bg-[#302f2f] "
                : " bg-black dark:bg-[#414040]"
            }`}
            onClick={() => setShowWebProjects(false)}
          >
            Favourite
          </button>
          <button
            className={` p-2 bg-[#999797] dark:text-black   rounded-md text-white  font-mono  ${
              showWebProjects
                ? "bg-black dark:bg-[#565555] "
                : "  bg-[#525252] hover:bg-black dark:hover:bg-[#302f2f] "
            }`}
            onClick={() => setShowWebProjects(true)}
          >
            Web
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {showWebProjects ? (
          <div className="space-y-5">
            <motion.div
              whileHover={{ scale: 1.08, translateY: -3 }}
              whileTap={{ scale: 0.95, rotate: 5 }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="project-card"
            >
              <div className="border dark:border-neutral-700 rounded-lg shadow-lg min-h-[55vh] dark:bg-[#282120] p-3">
                <div className="flex justify-between mt-4">
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      NFTs marketplace 2
                    </h4>
                    <div className="mt-3 sm:w-[30vw]">
                      <ul className="flex gap-6">
                        <li>
                          <img src={react} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={nodejs} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={tailwind} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={framer} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={MongoDB} alt="" width={40} height={40} />
                        </li>
                      </ul>
                    </div>
                    <div className="sm:w-[30vw] mt-3">
                      <p className="text-[12px] font-mono text-[#525252] dark:text-neutral-400">
                        Fully responsive and user-friendly interface built using
                        React and styled with libraries like Tailwind CSS, or
                        custom CSS.Display connected wallet details, including
                        balances (ETH, tokens).Display NFTs in a marketplace or
                        gallery format with filtering and sorting options (e.g.,
                        price, popularity, new listings).
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:w-[40vw] sm:h-[40vh] p-3">
                    <img src={nfts} alt="" className=" rounded-lg shadow-xl" />
                  </div>
                </div>
                <div className="px-3 mt-3 space-x-2 flex">
                  <a href="https://github.com/zeeshan00013" target="_blank">
                    <button className="w-20 h-9  rounded-lg bg-black text-white flex items-center justify-center gap-1">
                      {" "}
                      <span>
                        <img src={github} alt="" className="w-6 h-6" />
                      </span>
                      code
                    </button>
                  </a>
                  <a
                    href="https://missio-landing-page-pyq7.vercel.app/"
                    target="_blank"
                  >
                    <button className="w-20 h-9  rounded-lg bg-black text-white flex items-center justify-center gap-1">
                      {" "}
                      <span>
                        <img src={live} alt="" className="w-6 h-6" />
                      </span>
                      live
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08, translateY: -3 }}
              whileTap={{ scale: 0.95, rotate: 5 }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="project-card"
            >
              <div className="border dark:border-neutral-700 rounded-lg shadow-lg min-h-[55vh] dark:bg-[#282120] p-3">
                <div className="flex justify-between  mt-4">
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      Realestate website
                    </h4>
                    <div className="mt-3 sm:w-[30vw]">
                      <ul className="flex gap-6">
                        <li>
                          <img src={react} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={nodejs} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={bootstrap} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={framer} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={firbase} alt="" width={40} height={40} />
                        </li>
                      </ul>
                    </div>
                    <div className="sm:w-[30vw] mt-3">
                      <p className="text-[12px] font-mono text-[#525252] dark:text-neutral-400">
                        Showcase properties with images, descriptions, prices,
                        and specifications (e.g., size, location, type,
                        amenities).Different types of users (Buyers, Renters,
                        Sellers, Agents).Mobile-friendly and optimized UI for
                        all devices.
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block ">
                    <img
                      src={realeste}
                      alt=""
                      className="sm:w-[40vw] sm:h-[40vh] rounded-lg shadow-xl"
                    />
                  </div>
                </div>
                <div className="px-3 mt-3 space-x-2 flex">
                  <a href="https://github.com/zeeshan00013" target="_blank">
                    <button className="w-20 h-9  rounded-lg bg-black text-white flex items-center justify-center gap-1">
                      {" "}
                      <span>
                        <img src={github} alt="" className="w-6 h-6" />
                      </span>
                      code
                    </button>
                  </a>
                  <a
                    href="https://real-estate-page-phmn.vercel.app/"
                    target="_blank"
                  >
                    <button className="w-20 h-9  rounded-lg bg-black text-white flex items-center justify-center gap-1">
                      {" "}
                      <span>
                        <img src={live} alt="" className="w-6 h-6" />
                      </span>
                      live
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="space-y-5">
            <motion.div
              whileHover={{ scale: 1.08, translateY: -3 }}
              whileTap={{ scale: 0.95, rotate: 5 }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="project-card"
            >
              <div className="border dark:border-neutral-700 rounded-lg shadow-lg min-h-[55vh] dark:bg-[#282120] p-3">
                <div className="flex justify-between mt-4">
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      NFTs marketplace
                    </h4>
                    <div className="mt-3 sm:w-[30vw]">
                      <ul className="flex gap-6">
                        <li>
                          <img src={react} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={nodejs} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={tailwind} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={framer} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={MongoDB} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={figma} alt="" width={40} height={40} />
                        </li>
                      </ul>
                    </div>
                    <div className="sm:w-[30vw] mt-3">
                      <p className="text-[12px] font-mono text-[#525252] dark:text-neutral-400">
                        Fully responsive and user-friendly interface built using
                        React and styled with libraries like Tailwind CSS, or
                        custom CSS.Display connected wallet details, including
                        balances (ETH, tokens).Display NFTs in a marketplace or
                        gallery format with filtering and sorting options (e.g.,
                        price, popularity, new listings).
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block ">
                    <img
                      src={nfts2}
                      alt=""
                      className="sm:w-[40vw] sm:h-[40vh] rounded-lg"
                    />
                  </div>
                </div>
                <div className="px-3 mt-3 space-x-2 flex">
                  <a href="https://github.com/zeeshan00013" target="_blank">
                    <button className="w-20 h-9  rounded-lg bg-black text-white flex items-center justify-center gap-1">
                      {" "}
                      <span>
                        <img src={github} alt="" className="w-6 h-6" />
                      </span>
                      code
                    </button>
                  </a>
                  <a
                    href="https://nf-ts-market-place-2.vercel.app/"
                    target="_blank"
                  >
                    <button className="w-20 h-9  rounded-lg bg-black text-white flex items-center justify-center gap-1">
                      {" "}
                      <span>
                        <img src={live} alt="" className="w-6 h-6" />
                      </span>
                      live
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08, translateY: -3 }}
              whileTap={{ scale: 0.95, rotate: 5 }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="project-card"
            >
              <div className="border dark:border-neutral-700 rounded-lg shadow-lg min-h-[55vh] dark:bg-[#282120] p-3">
                <div className="flex justify-between  mt-4">
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      PandaTap website
                    </h4>
                    <div className="mt-3 sm:w-[30vw]">
                      <ul className="flex gap-6">
                        <li>
                          <img src={react} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={nodejs} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={bootstrap} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={MongoDB} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={figma} alt="" width={40} height={40} />
                        </li>
                      </ul>
                    </div>
                    <div className="sm:w-[30vw] mt-3">
                      <p className="text-[12px] font-mono text-[#525252] dark:text-neutral-400">
                        A web application to help users earn money through
                        taping game. added Social site like(e.g.,telegram,
                        Facebook,tweet).this site is fully Mobile-friendly and
                        optimized for multiple devices using frameworks like
                        Tailwind CSS.
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block mt-6 ">
                    <img
                      src={pandatap}
                      alt=""
                      className="sm:w-[40vw] sm:h-[40vh] rounded-lg"
                    />
                  </div>
                </div>
                <div className="px-3 mt-3 space-x-2 flex">
                  <a href="https://github.com/zeeshan00013" target="_blank">
                    <button className="w-20 h-9  rounded-lg bg-black text-white flex items-center justify-center gap-1">
                      {" "}
                      <span>
                        <img src={github} alt="" className="w-6 h-6" />
                      </span>
                      code
                    </button>
                  </a>
                  <a href="https://www.pandatap.io/" target="_blank">
                    <button className="w-20 h-9  rounded-lg bg-black text-white flex items-center justify-center gap-1">
                      {" "}
                      <span>
                        <img src={live} alt="" className="w-6 h-6" />
                      </span>
                      live
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08, translateY: -3 }}
              whileTap={{ scale: 0.95, rotate: 5 }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="project-card"
            >
              <div className="border dark:border-neutral-700 rounded-lg shadow-lg min-h-[55vh] dark:bg-[#282120] p-3">
                <div className="flex justify-between  mt-4">
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      Logoipsum
                    </h4>
                    <div className="mt-3 sm:w-[30vw]">
                      <ul className="flex gap-6">
                        <li>
                          <img src={react} alt="" width={40} height={40} />
                        </li>
                        <li>
                          <img src={figma} alt="" width={40} height={40} />
                        </li>
                      </ul>
                    </div>
                    <div className="sm:w-[30vw] mt-3">
                      <p className="text-[12px] font-mono text-[#525252] dark:text-neutral-400">
                        This is my first website .A simple web application which
                        I converted Figma to React this site is fully
                        Mobile-friendly and optimized for multiple devices using
                        framework like Tailwind CSS.
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block mt-6 ">
                    <img
                      src={FigmaToreact}
                      alt=""
                      className="sm:w-[40vw] sm:h-[40vh] rounded-lg"
                    />
                  </div>
                </div>
                <div className="px-3 mt-3 space-x-2 flex">
                  <a href="https://github.com/zeeshan00013" target="_blank">
                    <button className="w-20 h-9  rounded-lg bg-black text-white flex items-center justify-center gap-1">
                      {" "}
                      <span>
                        <img src={github} alt="" className="w-6 h-6" />
                      </span>
                      code
                    </button>
                  </a>
                  <a
                    href="https://figma-to-react-umber.vercel.app/"
                    target="_blank"
                  >
                    <button className="w-20 h-9  rounded-lg bg-black text-white flex items-center justify-center gap-1">
                      {" "}
                      <span>
                        <img src={live} alt="" className="w-6 h-6" />
                      </span>
                      live
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
