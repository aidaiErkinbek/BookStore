import './Favorites.css';
import Fav from '../../img/icons/favorite.svg'
import { Link } from 'react-router-dom'

function Favorites() {
  return (
    <>
  <Link to="/Favorites" className="Favorites">
              <img src={Fav} alt="" />
            </Link>
    </>
  );
}

export default Favorites;