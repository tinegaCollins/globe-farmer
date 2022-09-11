import '../css/search-box.css';
import search from '../assets/icons/search.svg';
const SearchBox = () => {
    return ( 
        <div className="search-box">
            <img src={search} alt="" srcset="" />
            <input type="text" placeholder="Search products, farmers and categories"/>
            <button>Search</button>
        </div>
     );
}
 
export default SearchBox;