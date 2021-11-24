import "./Nav.css"
import logo from "./images/logo.png"
import { NavLink, Link } from "react-router-dom"

function Nav(){

    return(
        <>
            <nav>
                <Link to="/homepage" className="logo">
                    <img src={logo}/>
                </Link>
                <section className="nav-links">
                    <NavLink to="/homepage" className="link-home"> Home </NavLink>
                    <NavLink to="/help" className="link-help"> How we help </NavLink>
                    <NavLink to="/programs" className="link-prog"> Programs </NavLink>
                    <NavLink to="/faqs" className="link-faqs"> FAQs </NavLink>
                    <Link to="/contact" className="link-cont"> Get In Touch </Link>
                </section>
            </nav>
        </>
    )
}

export default Nav