import { useState, useEffect } from 'react'
import icon from '../assets/icon.png';
import '../css/nav.css';
import'../css/variables.css';
import cart from '../assets/icons/cart.svg';
import user from '../assets/icons/user.svg';
import arrowDown from '../assets/icons/arrow-down.svg';
import arrowUp from '../assets/icons/arrow-up.svg';
import profile from '../assets/icons/profile.svg';
import logout from '../assets/icons/logout.svg';
import heart from '../assets/icons/heart.svg';
import login from '../assets/icons/login.svg';
import userCheck from '../assets/icons/user-check.svg';
const NavBar = (props) => {
    const [showMenu, setShowMenu] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleMenu = () => {
        setShowMenu(!showMenu);
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLoggedIn(true);
        }
    }, [])
    return ( 
        <nav>
            <div className="icon">
                <img src={icon} alt="logo" srcset="" />
                <h3>Fresh pickens</h3>
            </div>
            <div className="nav-links">
                <a href="/home">Home</a>
                <a href="/categories">Categories</a>
                <div className="dropdown">
                    <div className="dropdown" onClick={handleMenu}>
                        <img src={user} alt="" srcset="" className="user-icon" />
                        <p>Account</p>
                        <img src={arrowDown} alt="" srcset="" className="arrow-down" />
                    </div>
                    <div className="dropdown-content"style={
                        showMenu ? {display: 'block'} : {display: 'none'}
                    } >
                        {
                            isLoggedIn ?
                            <div className="isLoggedIn">
                                <a href="/profile">
                                    <img src={profile} alt="" srcset="" />
                                    Profile
                                </a>
                                <a href="/cart">
                                    <img src={cart} alt="" srcset="" />
                                    Cart
                                </a>
                                <a href="/saved">
                                    <img src={heart} alt="" srcset="" />
                                    Saved
                                </a>
                                <a href="/logout">
                                    <img src={logout} alt="" srcset="" />
                                    Logout
                                </a>
                            </div> :
                            <div className="isNotLoggedIn">
                                <a href="/login" className='login'>
                                    <img src={login} alt="" srcset="" />
                                    Login
                                </a>
                                <a href="/signup" className='signup'>
                                    <img src={userCheck} alt="" srcset="" />
                                    Sign up
                                </a>
                            </div>
                        }
                    </div>
                </div>
                <a href="contact">Contact us</a>
            </div>
        </nav>
     );
}
 
export default NavBar;