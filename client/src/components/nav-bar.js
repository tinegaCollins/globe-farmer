import icon from '../assets/icon.png';
import '../css/nav.css';
import'../css/variables.css';
import cart from '../assets/icons/cart.svg';
const NavBar = () => {
    return ( 
        <nav>
            <div className="icon">
                <img src={icon} alt="logo" srcset="" />
                <h3>Fresh pickens</h3>
            </div>
            <div className="nav-links">
                <a href="/home">Home</a>
                <a href="/categories">Categories</a>
                <a href="/blog">Blog</a>
                <a href="contact">Contact us</a>
            </div>
            <div className="account">
                <div className="cart">
                    <img src={cart} alt="" srcset="" />
                </div>
                <div className="account-details">
                    <button>signup</button>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;