import foot from "./css_footer.module.css"
import { FaHamburger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

function Footer(){
    return (<div className={foot.foot_container}>
        <FaHamburger style={{fontSize:"50px"}} />
        <section className={foot.para}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <p>Incidunt consequuntur amet culpa cum itaque neque.</p>
        </section>
        <section className={foot.caree}>
            <a href="#">About</a>
            <a href="">Career</a>
            <a href="">History</a>
            <a href="">Services</a>
            <a href="">Projects</a>
            <a href="">Blog</a>
        </section>
        <section className={foot.icons}>
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
        </section>
    </div>)
}

export default Footer;