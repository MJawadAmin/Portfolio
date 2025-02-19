import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Flag from "react-world-flags";
import { CiBrightnessDown } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import dp from "../images/img3.jpg";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/themeSlice";
import { useEffect } from "react";

const Home = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className=" md:px-40 px-8   w-ful">
      <div className="flex justify-between w-full md:gap-20">
        <div className="space-y-4 mt-16">
          <div className="space-y-3 font-exo text-[#525252]">
            <p className="text-2xl font-bold font-mono text-black dark:text-white">
              Muhammad Jawad Amin
            </p>
            <p className="font-medium text-sm md:text-lg dark:text-neutral-500 ">
              Web Developer || Mern Stack Developer
            </p>
            <p className="flex items-center gap-1 dark:text-neutral-500">
              <span>
                <FaLocationDot size={20} />
              </span>{" "}
              || Pakistan
            </p>
          </div>
          <div className="">
            <ul className="flex md:space-x-5 space-x-3 text-black ">
              <a
                href="https://github.com/MJawadAmin"
                target="_blank"
                className="md:w-10 md:h-10 w-8 h-8 p-1 rounded-full bg-[#32302f98]  flex items-center justify-center  md:rounded-lg dark:bg-[#282120]"
              >
                <FaGithub size={25} className="dark:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-jawad-amin-a70389216/"
                target="_blank"
                className="md:w-10 md:h-10 w-8 h-8 p-1 rounded-full bg-[#32302f98]  flex items-center justify-center  md:rounded-lg dark:bg-[#282120]"
              >
                <CiLinkedin size={25} className="dark:text-white" />
              </a>
              <a
                href="tel:03167388373"
                target="_blank"
                className="md:w-10 md:h-10 w-8 h-8 p-1 rounded-full bg-[#32302f98]  flex items-center justify-center  md:rounded-lg dark:bg-[#282120]"
              >
                <FiPhone size={25} className="dark:text-white" />
              </a>
              <a
                href="mailto:jjawadamn883@.com"
                target="_blank"
                className="md:w-10 md:h-10 w-8 h-8 p-1 rounded-full bg-[#32302f98]  flex items-center justify-center  md:rounded-lg dark:bg-[#282120]"
              >
                <MdOutlineEmail size={25} className="dark:text-white" />
              </a>
            </ul>
          </div>
          <div className="flex mt-2 space-x-5">
            <p>
              <Flag
                code="PK"
                className="md:w-12 md:h-12 w-8 h-8  rounded-full border "
              />
            </p>
            <div className="flex space-x-3">
              {!darkMode ? (
                <button onClick={() => dispatch(toggleDarkMode())}>
                  <CiBrightnessDown className="md:w-12 md:h-12 w-8 h-8" />
                </button>
              ) : (
                <button onClick={() => dispatch(toggleDarkMode())}>
                  <CiDark className="md:w-12 md:h-12 w-8 h-8 text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="hidden sm:block mt-16">
          <div className="rounded-full">
            <img src={dp} alt="" className=" rounded-full h-52 w-52" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
