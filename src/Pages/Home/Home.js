import './Home.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Home() {
  return (
    <>
       <div className="Home_slider">
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
                src="https://is1-ssl.mzstatic.com/image/thumb/XRVC0LFY33UhYRJc3uusMA/980x551.jpg"
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
                src="https://is1-ssl.mzstatic.com/image/thumb/EubK_TDtQfyCj_ibM2KR3A/689x387.jpg"
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
                src="https://is1-ssl.mzstatic.com/image/thumb/cqoFqhjwxlqbB99b2xiGSg/689x387.jpg"
                alt=""
              />
              <p className="Home_slide-txt">Lorem ipsum dolor sit amet.</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/dGQnmrXQqSe_YJJV1kcudQ/689x387.jpg"
                alt=""
              />
              <p className="Home_slide-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos quo fugit, placeat quaerat quod magnam.
              </p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Home;