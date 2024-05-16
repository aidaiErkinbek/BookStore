import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom'
import basket from '../../img/icons/basket.svg'

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo />
          <Menu />
          <Link to="" className="Cart_ic">
          
          </Link>
          <Link to="/cart" className="Cart_ic">
          <img src={basket} alt=""/>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
