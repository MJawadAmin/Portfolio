import javascript from "../Tools/javascript.svg"
import html from "../Tools/html.svg"
import css from "../Tools/css.svg"
import mysql from "../Tools/mysql.svg"
import mongodb from "../Tools/mongodb.svg"
import react from "../Tools/react.svg";
import node from "../Tools/nodejs.svg"

const Experience = () => {
  return (
    <div className="md:px-40 px-8 lg:mt-9 md:mt-6 mt-4 w-full  font-mono">
        <h1 className="md:text-2xl font-bold font-mono text-black dark:text-white">Experience</h1>
        <div className="space-y-4 mt-4">
          <div className=" min-h-[55vh] rounded-lg py-3">
            <div className="flex justify-between px-3 dark:text-white">
              <p className="font-bold ">Mehdi Technology</p>
              <p>Nov-24/present</p>
            </div>
            <div className="flex justify-between px-3 dark:text-white">
              <p className="text-sm">Mern stack Developer</p>
              <p className="text-sm">(Internship)</p>
            </div>
            <div className="px-3 mt-3 text-[12px]">
              <p className="text-[#525252] dark:text-neutral-400">As a MERN Stack Developer, I specialize in building robust and dynamic web applications using MongoDB, Express.js, React.js, and Node.js. With a strong foundation in frontend and backend development, I create user-friendly interfaces that are both visually appealing and responsive. My expertise includes designing scalable RESTful APIs, managing efficient database structures, and ensuring seamless integration between the client and server sides. I am passionate about leveraging modern tools and technologies to solve complex problems, optimize application performance, and deliver high-quality software solutions. Constantly learning and adapting, I strive to develop innovative, scalable, and impactful web applications that meet user needs and exceed expectations.</p>
            </div>
            <div className="px-3 text-[#525252] text-[12px] mt-2 dark:text-neutral-400">
              <h2>-Technologies:</h2>
             <div className="mt-2 space-y-3">
             <li className="flex items-center gap-2">/Javascript <span><img src={javascript} alt="" className="w-5 h-5" /></span></li>
             <li className="flex items-center gap-2">/React <span><img src={react} alt="" className="w-5 h-5" /></span></li>
             <li className="flex items-center gap-2">/Mongo Db <span><img src={mongodb} alt="" className="w-5 h-5" /></span></li>
             <li className="flex items-center gap-2">/Node <span><img src={node} alt="" className="w-5 h-5" /></span></li>
             </div>
            </div>
          </div>


          <div className=" min-h-[55vh] rounded-lg py-3">
            <div className="flex justify-between px-3 dark:text-white ">
              <p className="font-bold">Actime solutions </p>
              <p>August-24/Nov-24</p>
            </div>
            <div className="flex justify-between px-3 dark:text-white">
              <p className="text-sm">Frontend Developer</p>
              <p className="text-sm">(Apprenticeship)</p>
            </div>
            <div className="px-3 mt-3 text-[12px]">
              <p className="text-[#525252] dark:text-neutral-400">As a Frontend Developer, I specialize in creating engaging, intuitive, and responsive user interfaces that deliver exceptional user experiences. Leveraging modern tools and technologies like React.js, Tailwind CSS, Bootstrap, Framer Motion, and Material UI, I craft visually appealing designs that align with the latest UI/UX trends. I have extensive experience in implementing responsive layouts, creating interactive animations, and ensuring cross-browser compatibility. My work focuses on optimizing performance and building scalable solutions that enhance user interaction. Passionate about clean and efficient code, I aim to bridge the gap between design and functionality, delivering polished, dynamic, and impactful web applications.</p>
            </div>
            <div className="px-3 text-[#525252] text-[12px] mt-2 dark:text-neutral-400">
              <h2>-Technologies:</h2>
             <div className="mt-2 space-y-3">
             <li className="flex items-center gap-2">/Javascript <span><img src={javascript} alt="" className="w-5 h-5" /></span></li>
             <li className="flex items-center gap-2">/HTML <span><img src={html} alt="" className="w-5 h-5" /></span></li>
             <li className="flex items-center gap-2">/CSS <span><img src={css} alt="" className="w-5 h-5" /></span></li>
             <li className="flex items-center gap-2">/MYSQL <span><img src={mysql} alt="" className="w-5 h-5" /></span></li>
             </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience