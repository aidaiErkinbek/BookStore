import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Delivery.css';


function Delivery() {
  return (
    <>
    <span className='Shipping'>Shipping</span><br></br>
    <h2 className='Tit'>Delivery date = Days to Ship + Transit Time</h2>
    <p className='WeShip'><b>We ship Monday through Saturday, excluding U.S. holidays.</b><br></br>
All orders process and ship Monday - Friday, excluding
</p>
<Link to="#">federal holidays within the United States.</Link>
    </>
  );
}

export default Delivery;