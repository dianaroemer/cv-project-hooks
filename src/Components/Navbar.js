import React, { Component } from 'react';
import './Styling/NavbarStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    // constructor(props) {
        // super(props);
    // }

    render() {

        return (
            <nav className='navbarContainer' >
                
                <div className='navLeft'>
                    D Roemer             
                    {/* <img src="images/droemer.png" class="nav-droemer">  */}
                    {/* <FontAwesomeIcon icon={faUser} onClick={e=> preventDefault()}/> */}
                </div>
                
                <div className="navTitle">
                    CV-Application
                </div>
                


                <ul>
                    <li className="navOptionsToggle">Options</li>
                    <li className="navAboutToggle">About</li>
                    <li className="navPortfolioToggle">
                        <a href="https://github.com/dominicroemer">Portfolio</a>
                    </li>
                </ul>

                {/* <img src="images/nav-menu.png" class="nav-menu-icon"> */}

                <FontAwesomeIcon icon={faBars} 
                    className="navMenuIcon"
                    onClick={e=> e.preventDefault()}/>
                <FontAwesomeIcon icon={faUser} 
                    className='navMenuIcon'
                    onClick={e=> e.preventDefault()}/>


            </nav>
        )
    }
}

export default Navbar;