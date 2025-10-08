import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/saikumar-pagidi-n012412/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/saikumarpagidi" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;
