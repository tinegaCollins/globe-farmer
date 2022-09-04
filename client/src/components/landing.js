import landing from '../assets/home-img.png'
import '../css/landing.css'
import arrow from '../assets/icons/d-arrow.svg'
const LandingPage = () => {
    return ( 
        <section className="landing">
            <div className="content">
                <div className="top-text">
                    <h1>Get Fresh Grocieries</h1>
                    <h3>Enjoy Healty Life.</h3>
                </div>
                <div className="search">
                    <input type="text" />
                    <img src={arrow} alt="" srcset="" />
                    <button>Buy Now</button>
                </div>
                <div className="recent-connections">

                </div>
            </div>
            <div className="landing-image">
                <img src={landing} alt="home-icon" />
            </div>
        </section>
     );
}
 
export default LandingPage;