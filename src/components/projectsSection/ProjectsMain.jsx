import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import website1 from '../../assets/images/website1.jpg';
import androidCodelab from '../../assets/images/android_codelab.png';
import website3 from '../../assets/images/webisite3.png';
import Deepfake from '../../assets/images/deepfake.png';

const projects = [
  {
    name: "Learning Management System",
    year: "Apr2025",
    align: "right",
    image: website1,
    link: "https://github.com/saikumarpagidi",
  },
  {
    name: "Map Accesss API",
    year: "Dec2024",
    align: "left",
    image: androidCodelab,
    link: "https://github.com/saikumarpagidi/Simple-Amazon",
  },
  {
    name: "E-commerce Website (Simple Amazon Clone)",
    year: "sept2024",
    align: "right",
    image: website3,
    link: "https://github.com/saikumarpagidi/Simple-Amazon",
  },

  {
    name: "AI Deepfake Analysis Tool",
    year: "June2025",
    align: "left",
    image: Deepfake,
    link: "https://github.com/saikumarpagidi",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
