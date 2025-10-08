import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaCode, 
  FaProjectDiagram 
} from "react-icons/fa";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="group relative transform transition-all duration-500 hover:-translate-y-2 w-full"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-orange/10 
        opacity-0 group-hover:opacity-100 
        transition-all duration-500 
        rounded-2xl blur-lg"></div>

      {/* Main Card */}
      <div className="relative bg-darkBrown/70 backdrop-blur-xl 
        border border-lightBrown/30 
        rounded-2xl p-6 md:p-8 
        space-y-5 
        shadow-2xl 
        transition-all duration-500 
        group-hover:shadow-cyan/30
        w-full">
        
        {/* Job Title and Company */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-2">
          <div className="flex items-center gap-x-3">
            <FaBriefcase className="text-orange/70 text-xl" />
            <h3 className="text-xl font-bold text-cyan 
              group-hover:text-orange 
              transition-colors duration-300">
              {experience.job}
            </h3>
          </div>
          <div className="flex items-center gap-x-2 text-sm text-lightGrey">
            <FaProjectDiagram className="text-orange/70" />
            <span>{experience.company}</span>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-x-2 text-sm text-lightGrey mb-3">
          <FaCalendarAlt className="text-orange/70" />
          <span>{experience.date}</span>
        </div>

        {/* Responsibilities */}
        <ul className="space-y-3 text-sm text-white/90">
          {experience.responsibilities.map((resp, index) => (
            <li 
              key={index} 
              className="flex items-start gap-x-3 
                group/item 
                transition-all duration-300 
                hover:text-cyan/80
                bg-darkBrown/30 p-3 rounded-lg"
            >
              <FaCode className="text-orange/60 mt-1 flex-shrink-0 
                group-hover/item:text-cyan 
                transition-colors duration-300" />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
