import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./layout_03.css";

const Template3 = () => {
  return (
    <>
      <div className="row layout_template3">
        <div className="col-md-4 d-none d-md-block main_pic">
          <img src="http://storage.googleapis.com/fg_merchant_image/PX/PX_longlong_1625477080.jpg" alt="image" />
        </div>
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-3"> 
              <div className="mb-2"> 
              <img src="http://storage.googleapis.com/fg_merchant_image/PX/PX_longlong_1625477080.jpg" alt="image" />
              </div>
            </div>
            <div className="col-3"> 
              <div className="mb-2"> 
              <img src="http://storage.googleapis.com/fg_merchant_image/PX/PX_longlong_1625477080.jpg" alt="image" />
              </div>
            </div>
            <div className="col-3"> 
              <div className="mb-2"> 
              <img src="http://storage.googleapis.com/fg_merchant_image/PX/PX_longlong_1625477080.jpg" alt="image" />
              </div>
            </div>
            <div className="col-3"> 
              <div className="mb-2"> 
              <img src="http://storage.googleapis.com/fg_merchant_image/PX/PX_longlong_1625477080.jpg" alt="image" />
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-3"> 
              <div className="mt-2"> 
              <img src="http://storage.googleapis.com/fg_merchant_image/PX/PX_longlong_1625477080.jpg" alt="image" />
              </div>
            </div>
            <div className="col-3"> 
              <div className="mt-2"> 
              <img src="http://storage.googleapis.com/fg_merchant_image/PX/PX_longlong_1625477080.jpg" alt="image" />
              </div>
            </div>
            <div className="col-3"> 
              <div className="mt-2"> 
              <img src="http://storage.googleapis.com/fg_merchant_image/PX/PX_longlong_1625477080.jpg" alt="image" />
              </div>
            </div>
            <div className="col-3"> 
              <div className="mt-2"> 
              <img src="http://storage.googleapis.com/fg_merchant_image/PX/PX_longlong_1625477080.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};


export default Template3;
