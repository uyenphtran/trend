import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import { slide as Menu } from 'react-burger-menu';
import '../styles/Navbar.scss';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  } 
  
  render() {

    const facebook = "https://www.facebook.com/trenducsd/";
    const instagram = "https://www.instagram.com/trenducsd/";
    const medium = "https://medium.com/@trenducsd";
    const { windowWidth } = this.state; 
    
    return (
      <div className='navbar-container'>
        {/* <Menu>
          <NavLink to="/issues">
            <h4><a href={"../pages/issues.js"}>ISSUES</a></h4>
          </NavLink>
          <NavLink to="/team">
            <h4><a href={"../pages/team.js"}>TEAM</a></h4>
          </NavLink>
            <div className="vertical-links-container">
              <a href={instagram}>
                <BsInstagram />
              </a>
              <a href={facebook}>
                <BsFacebook />
              </a>
              <a href={medium}> 
                <FaMedium />
              </a>
            </div>
          </Menu> */}
          {windowWidth > 800 ? (
            <div className='horizontal-content-container'>
              <div className='horizontal-links-container' id="navbar-pages">
                <NavLink to="/issues">
                  <h4><a href={"../pages/issues.js"}>ISSUES</a></h4>
                </NavLink>
                <NavLink to="/team">
                  <h4><a href={"../pages/team.js"}>TEAM</a></h4>
                </NavLink>
              </div>
              
              <div className='logo-container'>
                <NavLink to="/">
                  <a href={"../pages/home.js"}>
                    <h1>TREND</h1>
                  </a>
                </NavLink>
              </div>
              
              <div className="horizontal-links-container" id="navbar-socials">
                <a href={instagram}>
                  <BsInstagram />
                </a>
                <a href={facebook}>
                  <BsFacebook />
                </a>
                <a href={medium}> 
                  <FaMedium />
                </a>
              </div>
            </div>
          ):(
            <div className='vertical-content-container'>
              <div className='logo-container'>
                <NavLink to="/">
                  <a href={"../pages/home.js"}>
                    <h1>TREND</h1>
                  </a>
                </NavLink>
              </div>

              <Menu className='burger-menu'>
                <NavLink to="/issues">
                  <h4><a href={"../pages/issues.js"}>ISSUES</a></h4>
                </NavLink>
                <NavLink to="/team">
                  <h4><a href={"../pages/team.js"}>TEAM</a></h4>
                </NavLink>
                <div className="vertical-links-container">
                  <a className="vertical-socials" href={instagram}>
                    <BsInstagram />
                  </a>
                  <a className="vertical-socials" href={facebook}>
                    <BsFacebook />
                  </a>
                  <a className="vertical-socials" href={medium}> 
                    <FaMedium />
                  </a>
                </div>
              </Menu>
            </div>
          )}
      </div>
    )
  }
}

export default Navbar;