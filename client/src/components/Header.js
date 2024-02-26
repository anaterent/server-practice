import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Header() {

    return (
        <div className="header">
            <div className='content-container flex flex-separate'>
                <div className='flex'>
                    <Link className="header-link" to="/">
                        <h1>recipe finder</h1>
                    </Link>
                    <Link className="home-link" to="/">
                        <FontAwesomeIcon icon={faHouse} />
                        Home
                    </Link>
                    <Link className="saved-link" to='/saved'>
                        <FontAwesomeIcon icon={faBookmark} />
                        Saved Recipes
                    </Link>
                </div>
                <div>
                    <Link className="user-link" to='/sign_up'>
                        <FontAwesomeIcon icon={faUser} />
                        Account
                    </Link>
                </div>




            </div>


        </div>
    )
}

export default Header;