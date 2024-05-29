import './Contacts.css';
import location from '../../img/icons/location.png'
import envelope from '../../img/icons/envelope.png'
import phone from '../../img/icons/phone.png'
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <>
    <div className='container'>
<div className='contact'>
  <h3 className='contTit'>CONTACT INFO</h3>
  <div className='contInfo'>
    <div className='contInfoIn flex'>
      <div className='contLogo'>
      <img src={location} alt="" />
      </div>
      <p className='contTxt'><b>Address:</b>  2 Ennerdale Civic center CNR/Katz RD and Smith Ennerdale, Gauteng</p>
      <div className='contLogo'>
      <img src={phone} alt="" />
      </div>
      <p className='contTxt'><b> Phone:</b>(000)</p>
      <div className='contLogo'>
      <img src={envelope} alt="" />
      </div>
      <p className='contTxt'><b>Email:</b><Link to='#'>info@junkybooks.com</Link></p>
    </div>
  </div>
</div>
    </div>
    </>
  );
}

export default Contacts;