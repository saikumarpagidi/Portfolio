import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    job: "Java Full Stack Trainee",
    company: "C-DAC",
    date: "Nov 2024 - May 2025",
    responsibilities: [
      "Designed and developed a feature-rich Learning Management System (LMS) with advanced course creation, student tracking, and integrated assessment modules.",
      "Demonstrated innovative problem-solving by creating scalable, user-centric educational technology solutions.",
      "Implemented comprehensive quizzes and progress tracking mechanisms to enhance interactive learning experiences."
    ],
  },
  {
    job: "Software Engineer",
    company: "C-DAC",
    date: "June 2025 - Present",
    responsibilities: [
      "Enhanced LMS with advanced reporting features, delivering comprehensive, data-driven insights into course progression.",
      "Implemented a sophisticated performance-based badge generation system to motivate student achievements.",
      "Contributed to the development of a Deepfake Detection Tool Dashboard, focusing on user interface and system integration."
    ],
  },
];

const AllExperiences = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl mx-auto px-4 py-16 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkBrown/10 to-black/10 opacity-50 rounded-3xl pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Vertical timeline line with gradient - hidden on mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 
          bg-gradient-to-b from-cyan/30 via-orange/30 to-transparent rounded-full 
          hidden md:block"></div>
        
        {experiences.map((experience, index) => {
          const isEvenIndex = index % 2 === 0;
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: isEvenIndex ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className={`relative flex flex-col md:flex-row items-center mb-16 
                ${isEvenIndex ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Marker - centered on mobile */}
              <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 
                bg-darkBrown border-2 border-orange 
                w-14 h-14 rounded-full z-20 flex items-center justify-center 
                shadow-lg hover:shadow-orange/30 transition-all duration-300
                md:left-1/2`}>
                <FaBriefcase className="text-orange text-2xl" />
              </div>
              
              {/* Experience Card Container - full width on mobile */}
              <div className={`w-full md:w-[calc(50%-4rem)] 
                ${isEvenIndex ? 'md:mr-auto md:pl-16' : 'md:ml-auto md:pr-16'}
                mt-8 md:mt-0`}>
                <SingleExperience experience={experience} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default AllExperiences;