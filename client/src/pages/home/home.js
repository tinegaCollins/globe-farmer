import NavBar from "../../components/nav-bar";
import LandingPage from "../../components/landing";
import NearYou from "../../components/near-you";
import SearchBox from "../../components/search-box";
const HomePage = () => {
    return ( 
        <section className="home">
            <NavBar/>
            <SearchBox/>
            <LandingPage/>
            <NearYou/>
        </section>
     );
}
 
export default HomePage;