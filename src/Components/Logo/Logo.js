import './Logo.css';
import logos from '../../img/logo.svg'
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
    <Link href="#" class="logo">
					<img src={logos} alt=""/>
				</Link>
    </>
  );
}

export default Logo;