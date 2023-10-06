import "./Footer.css";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import fitnessPulse from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_group">
        <Link to="/">
          <img src={fitnessPulse} alt="logo" width="70px" height="50px" />
        </Link>
      </div>
      <div className="footer_group">
        <span>
          <Link to="https://www.linkedin.com/in/kesharvani">
            <BsLinkedin size={24} className="logo" />
          </Link>
        </span>
        <span>
          <Link to="https://github.com/Kesharvani/pulse-fit">
            <BsGithub size={24} className="logo" />
          </Link>
        </span>
        <span>
          <Link to="https://www.facebook.com/profile.php?id=100008978371402">
            <BsFacebook size={24} className="logo" />
          </Link>
        </span>
      </div>
      <div className="copyright_group">
        Copyright<span className="copyright"> Shubham Kesharvani</span>
      </div>
    </div>
  );
};

export default Footer;
