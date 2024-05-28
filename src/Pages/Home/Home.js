
import './Home.css';
import b1 from '../../img/b1.jpeg'
import b2 from '../../img/b2.jpeg'
import b3 from '../../img/b3.jpeg'
import b4 from '../../img/b4.jpeg'
import b5 from '../../img/b5.jpeg'
import b6 from '../../img/b6.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import slide1 from '../../img/slide1.jpeg'
import slide2 from '../../img/slide2.jpg'
import slide3 from '../../img/slide3.jpg'
import slide4 from '../../img/slide4.jpg'


function Home() {
  return (

    <div className="Best">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        autoplay={1000}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Link className="Home_slide" to="#">
            <img
              src={slide1}
              alt=""
            />
            <p className="Home_slide-txt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellat ab assumenda distinctio. Ex ipsa beatae a totam
              blanditiis repudiandae voluptas!
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="Home_slide" to="#">
            <img
              src={slide2}
              alt=""
            />
            <p className="Home_slide-txt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellat ab assumenda distinctio. Ex ipsa beatae a totam
              blanditiis repudiandae voluptas!
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="Home_slide" to="#">
            <img
              src={slide3}
              alt=""
            />
            <p className="Home_slide-txt">Lorem ipsum dolor sit amet.</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="Home_slide" to="#">
            <img
              src={slide4}
              alt=""
            />
            <p className="Home_slide-txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quo fugit, placeat quaerat quod magnam.
            </p>
          </Link>
        </SwiperSlide>
      </Swiper>

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
      <div className="Home_slider">

      </div>

    </div>




  );
}

export default Home;