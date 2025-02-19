import { useEffect } from "react";
import { CiBrightnessDown, CiDark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/themeSlice";

import Flag from "react-world-flags";

const Footer = () => {
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
    <div className="md:px-40 px-8 lg:mt-9 md:mt-6 mt-4 w-full  font-mono  ">
      <div className="border-t border-neutral-300 w-[80vw] flex flex-col py-3  justify-center items-center">
        <div>
          <p className="dark:text-white text-sm">
            Made By <span className="font-bold">Muhammad Jawad Amin</span> with{" "}
            <span className="font-bold">React.js</span>
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <span>
            {" "}
            <Flag
              code="PK"
              className="md:w-10 md:h-10 w-8 h-8  rounded-full border "
            />
          </span>
          <button onClick={() => dispatch(toggleDarkMode())}>
            {darkMode ? (
              <CiDark className="md:w-12 md:h-12 w-8 h-8 text-white" />
            ) : (
              <CiBrightnessDown className="md:w-12 md:h-12 w-8 h-8" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
