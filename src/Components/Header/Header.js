import './Header.css';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom'
import basket from '../../img/icons/basket.svg'
import Favorites from '../../Pages/Favorites/Favorites';


function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo />
          <Menu />
          <div className="HeadIc flex">
            <Favorites/>
            <Link to="" className="Cart_ic">
            </Link>
            <Link to="/cart" className="Cart_ic">
              <img src={basket} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
