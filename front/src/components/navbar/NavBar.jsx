import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = ({onSearch}) =>{
    return (
        <nav>
            <button>
                <Link to='/about'> about</Link>
            </button>
            <button>
                <Link to='/home' > home</Link>
            </button>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
};

export default NavBar;