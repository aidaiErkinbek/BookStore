import { Link } from 'react-router-dom';
import './Home.css';
import b1 from '../../img/b1.jpeg'
import b2 from '../../img/b2.jpeg'
import b3 from '../../img/b3.jpeg'
import b4 from '../../img/b4.jpeg'
import b5 from '../../img/b5.jpeg'
import b6 from '../../img/b6.jpeg'


function Home() {
  return (

    <div className="Best">
      <div className="container">
        <Link to="" className="BestTit"><h2>Bestsellers</h2>
        </Link>
        <br></br>
        <h3 className='Tit'>
          This year's top sellers</h3>
        <div className="bestCart">
          <div className="bestCartIn flex">
            <Link to="#" className="bestIn">
              <div className='imgCart'>
              <img src={b1} alt="" /></div>
              <h3 className='cartName'>Harry Potter and the Sorcerer's</h3>
              <span className='priceTit'>J.K. Rowling from: </span>
              <span className='price'>$4.29</span> 
            </Link>
            <Link to="#" className="bestIn">
              <div className='imgCart'>
              <img src={b2} alt="" /></div>
              <h3 className='cartName'>Harry Potter and the Prisoner of the</h3>
              <span className='priceTit'>J.K. Rowling from: </span>
              <span className='price'>$3.59</span>
              
            </Link>
            <Link to="#" className="bestIn">
              <div className='imgCart'>
              <img src={b3} alt="" /></div>
              <h3 className='cartName'>Harry Potter and the Sorcerer's Stone</h3>
              <span className='priceTit'>J.K. Rowling from: </span>
              <span className='price'>$3.59</span>
              
            </Link>
            <Link to="#" className="bestIn">
              <div className='imgCart'>
              <img src={b4} alt="" /></div>
              <h3 className='cartName'>Harry Potter and the Sorcerer's Stone</h3>
              <span className='priceTit'>J.K. Rowling from: </span>
              <span className='price'>$3.59</span>
              
            </Link>
            <Link to="#" className="bestIn">
              <div className='imgCart'>
              <img src={b5} alt="" /></div>
              <h3 className='cartName'>Harry Potter and the Sorcerer's</h3>
              <span className='priceTit'>J.K. Rowling from: </span>
              <span className='price'>$3.59</span>
              
            </Link>
            <Link to="#" className="bestIn">
              <div className='imgCart'>
              <img src={b6} alt="" /></div>
              <h3 className='cartName'>Harry Potter and the Sorcerer's Stone</h3>
              <span className='priceTit'>J.K. Rowling from: </span>
              <span className='price'>$3.59</span>
              
            </Link>
          </div>
        </div>
      </div>
      </div>
      );
}

      export default Home;