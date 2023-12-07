import { useState, useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className={"navbar-toggler-icon"}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/papers" className={activeLink === 'papers' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('papers')}>Papers</Nav.Link>
              <Nav.Link as={NavLink} to="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link as={NavLink} to="/learning" className={activeLink === 'learning' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('learning')}>Learning</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/jonathanfanyale/"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/jfan1256"><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/jofan2705/"><img src={navIcon3} alt=""/></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
