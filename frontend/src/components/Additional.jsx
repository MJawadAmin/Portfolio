import walking from "../Tools/person-walking-medium-dark-skin-tone-svgrepo-com.svg";
import football from "../Tools/football-svgrepo-com.svg";
import camping from "../Tools/camp.svg";
import programming from "../Tools/programming-monitor-svgrepo-com.svg";
import { motion } from "framer-motion";

const Additional = () => {
  const technologies = [
    { src: walking, alt: "walking", text: "Walking" },
    { src: programming, alt: "programming", text: "Programming" },
    { src: football, alt: "football", text: "Football" },
    { src: camping, alt: "camping", text: "Camping" },
  ];

  return (
    <div className="md:px-40 px-8 lg:mt-9 md:mt-6 mt-4 w-full font-mono">
      <h2 className="text-2xl font-bold dark:text-white">Education</h2>

      <div className=" rounded-lg mt-4 space-y-4">
        <div>
          <div className="flex justify-between  dark:text-white ">
            <p className="font-bold">Abdul Wali Khan University Mardan</p>
            <p>July 2024</p>
          </div>
          <div className="flex justify-between  dark:text-white">
            <p className="text-sm">Graduated</p>
          </div>
        </div>
        {/* <div>
          <div className="flex justify-between  dark:text-white ">
            <p className="font-bold">Anglo Arabic Higher secondary school</p>
            <p>sep-18/feb-20</p>
          </div>
          <div className="flex justify-between  dark:text-white">
            <p className="text-sm">Matric</p>
          </div>
        </div> */}
      </div>
      <div className="min-h-[20vh] rounded-lg mt-8">
        <h2 className="text-2xl font-bold dark:text-white">Hobbies</h2>
        <div className="flex flex-wrap gap-8 place-items-start mt-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="h-[10vh] w-[10vh]  sm:h-[16vh] sm:w-[16vh] flex flex-col items-center justify-center rounded-xl bg-gray-100 dark:bg-[#282120] p-2"
            >
              <p className="mb-2 text-[12px] dark:text-neutral-400">
                {tech.text}
              </p>
              <motion.img
                whileTap={{ scale: 1.1, rotate: 360 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                src={tech.src}
                alt={tech.alt}
                className="h-[10vh] w-[10vh]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Additional;
