import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Delivery.css';


function Delivery() {
  return (
    <>
    <span className='Shipping db'>Shipping</span>
    <h2 className='Del'>Delivery date = Days to Ship + Transit Time</h2>
    <p className='WeShip'><b>We ship Monday through Saturday, excluding U.S. holidays.</b><br></br>
All orders process and ship Monday - Friday, excluding
 <Link to="#">federal holidays within the United States.</Link></p>
<h2 className='Ship'>U.S. Shipping Information</h2>
<div className='table'>
<div className='tableIn'>
  <h3 className='tTit'>Shipping Method</h3>
  
</div>
</div>




    </>
  );
}

export default Delivery;