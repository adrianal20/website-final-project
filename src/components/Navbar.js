import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

   
    const handleClick = () => setClick(!click);

    const closeMbileMenu = () => setClick(false);

    const onMouseEnter = () => {if (window.innerWidth < 960) {setDropdown(false);
        } else {
          setDropdown(true);
        }
      };

    const onMouseLeave = () => {if (window.innerWidth < 960) {setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    return(
        <div>
            <nav className="navbar">

                <Link to='/' className='navbar-logo'> Portfolio </Link>
                
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                   
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMbileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMbileMenu}>
                            About Me
                        </Link>
                    </li>

                
                    
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/education' className='nav-links' onClick={closeMbileMenu}>
                            Education <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                    <li className='nav-item'>
                        <Link to='/contact-me' className='nav-links' onClick={closeMbileMenu}>
                            Contact
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMbileMenu}>
                            Sign Up
                        </Link>
                    </li>

                </ul>

                <Button/>

            </nav>
        </div>
    )
}

export default Navbar;