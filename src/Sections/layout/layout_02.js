import { Card,CardGroup} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay,FreeMode } from "swiper";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const HaveContent1 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            // width: 320,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          // 640: {
          //   width: 640,
          //   slidesPerView: 2,
          // },
          // when window width is >= 768px
          768: {
            // width: 768,
            slidesPerView: 2,
          },
          1000: {
            // width: 1000,
            slidesPerView: 3,
          },

        }}
        modules={[FreeMode, Pagination]}
        className="PromoSwiper"
      >
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            <Card.Body className="color_primary">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            <Card.Body  className="color_primary">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            <Card.Body  className="color_primary">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            <Card.Body className="color_primary">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            <Card.Body className="color_primary">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            <Card.Body className="color_primary">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const HaveContent2 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            // width: 320,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          // 640: {
          //   width: 640,
          //   slidesPerView: 2,
          // },
          // when window width is >= 768px
          768: {
            // width: 768,
            slidesPerView: 2,
          },
          1000: {
            // width: 1000,
            slidesPerView: 3,
          },

        }}
        modules={[FreeMode, Pagination]}
        className="PromoSwiper"
      >
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/800x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/800x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/800x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/800x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/800x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/800x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
        </SwiperSlide>
      </Swiper>
 
    
   
    </>
  );
}

const HaveContent3 = () => {
  return (
    <>
    <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            // width: 320,
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          // 640: {
          //   width: 640,
          //   slidesPerView: 2,
          // },
          // when window width is >= 768px
          768: {
            // width: 768,
            slidesPerView: 3,
          },
          1000: {
            // width: 1000,
            slidesPerView: 4,
          },

        }}
        modules={[FreeMode, Pagination]}
        className="PromoSwiper"
      >
        <SwiperSlide>
        <Card>
            <Card.Img variant="top" src="img/800x800.png" />
            <Card.Body className="color_primary">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card>
            <Card.Img variant="top" src="img/800x800.png" />
            <Card.Body className="color_primary">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card>
            <Card.Img variant="top" src="img/800x800.png" />
            <Card.Body className="color_primary">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card>
            <Card.Img variant="top" src="img/800x800.png" />
            <Card.Body className="color_primary">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card>
            <Card.Img variant="top" src="img/800x800.png" />
            <Card.Body className="color_primary">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card>
            <Card.Img variant="top" src="img/800x800.png" />
            <Card.Body className="color_primary">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    
    </>
  );
}
const HaveContent4 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            // width: 320,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          // 640: {
          //   width: 640,
          //   slidesPerView: 2,
          // },
          // when window width is >= 768px
          768: {
            // width: 768,
            slidesPerView: 1,
          },
          1000: {
            // width: 1000,
            slidesPerView: 2,
          },

        }}
        modules={[FreeMode, Pagination]}
        className="PromoSwiper"
      >
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/1600x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
  
        </Card.Body>
      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/1600x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
  
        </Card.Body>
      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/1600x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
  
        </Card.Body>
      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/1600x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
  
        </Card.Body>
      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/1600x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
  
        </Card.Body>
      </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/1600x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
  
        </Card.Body>
      </Card>
        </SwiperSlide>
      </Swiper>
 
    </>
  );
}

const NoContent1 = () => {
        return (
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 640px
            320: {
              // width: 320,
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            // 640: {
            //   width: 640,
            //   slidesPerView: 2,
            // },
            // when window width is >= 768px
            768: {
              // width: 768,
              slidesPerView: 2,
            },
            1000: {
              // width: 1000,
              slidesPerView: 3,
            },
  
          }}
          modules={[FreeMode, Pagination]}
          className="PromoSwiper"
        >
          <SwiperSlide>
            <Card>
              <Card.Img variant="top" src="img/1600x800.png" />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Card.Img variant="top" src="img/1600x800.png" />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Card.Img variant="top" src="img/1600x800.png" />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Card.Img variant="top" src="img/1600x800.png" />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Card.Img variant="top" src="img/1600x800.png" />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Card.Img variant="top" src="img/1600x800.png" />
            </Card>
          </SwiperSlide>
        </Swiper>
      </>
    );
  
  
}

const NoContent2 = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            // width: 320,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          // 640: {
          //   width: 640,
          //   slidesPerView: 2,
          // },
          // when window width is >= 768px
          768: {
            // width: 768,
            slidesPerView: 3,
          },
          1000: {
            // width: 1000,
            slidesPerView: 4,
          },

        }}
        modules={[FreeMode, Pagination]}
        className="PromoSwiper"
      >
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/800x800.png" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/800x800.png" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/800x800.png" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/800x800.png" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/800x800.png" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/800x800.png" />
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const Template2 = () => {
    return (
      <>
     <NoContent2/>
      </>
    );
};


  export default Template2 ;
  