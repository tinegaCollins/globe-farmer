import '../css/search-box.css';
const SearchBox = () => {
    return ( 
        <div className="search-box">
            <input type="text" placeholder="Search products, farmers and categories"/>
            <button>Search</button>
        </div>
     );
}
 
export default SearchBox;