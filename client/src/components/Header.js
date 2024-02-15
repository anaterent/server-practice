import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Header() {

    return (
        <div className="header">
            <Link className="home-link" to="/">
                <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link className="header-link" to="/">
                <h1>Recipe Search!</h1>
            </Link>
            <Link className="saved-link" to='/saved'>
                <FontAwesomeIcon icon={faBookmark} />
            </Link>
            <p>Find meal ideas based on available ingredients</p>
        </div>
    )
}

export default Header;