import Filter from './filters'
import landing from '../assets/home-img.png'
import '../css/landing.css'
import explore from '../assets/icons/explore.svg'
const LandingPage = () => {
    return ( 
        <section className="landing">
            <Filter />
            <div className="landing-image">
                <img src={landing} alt="home-icon" />
                <div className="landing-text">
                    <h1>Find the best products</h1>
                    <p className="first-text">from the best suppliers</p>
                    <p className="second-text">A place where buyers connect directly with farmers to get the best and finnest produce money can buy</p>
                    <a href="/products">Explore <img src={explore} alt="arrow" /></a>
                </div>
            </div>
        </section>
     );
}
 
export default LandingPage;