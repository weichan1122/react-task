import {
  Container,
  Card,
  Tab,
  Tabs,
  Table,
  Nav,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/pagination";
import "./home1.css";

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="Bannerswiper"
      >
        <SwiperSlide>
          <img src="img/1920x600.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/1920x600.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const SpeakerAnn = () => {
  return (
    <>
  
        <div class="bg-speaker">
          <div class="ann__bar container d-flex align-items-center">
            <span>
              <img src="https://macal8.com/assets/img/speaker.svg" />
            </span>
            <Marquee gradientColor={"transparent"} speed={"85"}>
              Get a massive bonus up to RM 1,288 with the turnover u has achieve
              when u play in Macal8. What’s more? Counting on your deposit and
              redeem unlimited Apple’s product! It’s only happening in Macal8 !
              Follow our Telegram channel for the latest updates or website
              links. We will NEVER contact you and provide you with bank
              accounts to deposit through SMS, WhatsApp, or Telegram. Please be
              cautious of scammers.
            </Marquee>
          </div>
        </div>
      
    </>
  );
};

const MobileHomeButton = () => {
  return (
    <>
    <div className="home-button-m">
       <Row className="mt-3">
          <Col><Button className="w-100 login-button" >Login</Button></Col>
          <Col><Button className="w-100 reg-button">Join Now</Button></Col>
       </Row>
       </div>
    </>
  );
};

const HomeGame = () => {
  return (
    <>
      <div className=" d-none d-lg-block">
        
        <div className="position-relative">
          <Link to="../promotion" className="me-1 ms-1 homegame_view">
            View More &nbsp;
            <AiOutlineRight />
          </Link>
          <img src="img/home/Slot2.gif" className="d-flex m-auto mt-5" />
        </div>
        <div className="position-relative">
          <Link to="../promotion" className="me-1 ms-1 homegame_view">
            View More &nbsp;
            <AiOutlineRight />
          </Link>
          <img src="img/home/Casino2.gif" className="d-flex m-auto mt-5" />
        </div>
       
      </div>

      <div className="d-lg-none">
      <Tabs
      defaultActiveKey="profile"
      id="home-game-m"
      className="my-3 justify-content-center home-game-m"
    >
      <Tab eventKey="home" title="Slot Games">
      {Array.from({ length: 3 }).map((_, index) => (
               <Row>
               <Col>
                 <a>
                   <img
                     src="https://storage.googleapis.com/fg_merchant_image/fg902/mobile/gameid/slots/2.png"
                     alt="918KISS"
                   />
                 </a>
                 </Col>
                 <Col>
                 <a>
                   <img
                     src="https://storage.googleapis.com/fg_merchant_image/fg902/mobile/gameid/slots/2.png"
                     alt="918KISS"
                   />
                 </a>
                 </Col>
                 <Col>
                 <a>
                   <img
                     src="https://storage.googleapis.com/fg_merchant_image/fg902/mobile/gameid/slots/2.png"
                     alt="918KISS"
                   />
                 </a>
                 </Col>
             </Row>
            ))}
      </Tab>
      <Tab eventKey="profile" title="Live Casino">
      {Array.from({ length: 3 }).map((_, index) => (
               <Row>
               <Col>
                 <a>
                   <img
                     src="https://storage.googleapis.com/fg_merchant_image/fg902/mobile/gameid/slots/2.png"
                     alt="918KISS"
                   />
                 </a>
                 </Col>
                 <Col>
                 <a>
                   <img
                     src="https://storage.googleapis.com/fg_merchant_image/fg902/mobile/gameid/slots/2.png"
                     alt="918KISS"
                   />
                 </a>
                 </Col>
                 <Col>
                 <a>
                   <img
                     src="https://storage.googleapis.com/fg_merchant_image/fg902/mobile/gameid/slots/2.png"
                     alt="918KISS"
                   />
                 </a>
                 </Col>
             </Row>
            ))}
      </Tab>
    
    </Tabs>
     
      </div>
    </>
  );
};

const Promo = () => {
  return (
    <section className="my-5">
      <div className="d-flex align-items-center justify-content-between">
        <div className="home_title">Promotion</div>
        <Link to="../promotion" className="me-1 ms-1">
          View More &nbsp;
          <AiOutlineRight />
        </Link>
      </div>

      <Swiper
        slidesPerView={3}
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

          1400: {
            // width: 1320,
            slidesPerView: 3,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="PromoSwiper"
      >
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            {/* <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body> */}
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            {/* <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body> */}
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            {/* <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body> */}
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            {/* <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body> */}
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            {/* <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body> */}
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
            {/* <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body> */}
          </Card>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

function RankingTable() {
  return (
    <Table  className="ranking_table">
      <tbody>
        <tr>
          <td>
            <img
              src="http://54.254.206.220/weichan/77cepat/m/assets/img/gold.png"
              width={"35px"}
            />
          </td>
          <td>Username 1</td>
          <td>RM 1000</td>
        </tr>
        <tr>
          <td>
            <img
              src="http://54.254.206.220/weichan/77cepat/m/assets/img/silver.png"
              width={"30px"}
            />
          </td>
          <td>Username 2</td>
          <td>RM 1000</td>
        </tr>
        <tr>
          <td>
            <img
              src="http://54.254.206.220/weichan/77cepat/m/assets/img/bronze.png"
              width={"25px"}
            />
          </td>
          <td>Username 3</td>
          <td>RM 1000</td>
        </tr>

        {Array.from({ length: 5 }).map((_, index) => (
          <tr>
            <td key={index + 4}></td>
            <td>Username {index + 4}</td>
            <td>RM 1000</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

function DesktopRankingTable() {
  return (
    <>
      <div className="d-flex ">
        <Table className="ranking_table">
          <thead>
            <tr>
              <th colSpan={3}>TOP DEPOSIT</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr>
                <td key={index + 1} className="text-end">
                  {" "}
                  <FaUserCircle />
                </td>
                <td className="text-start">Username {index + 1}</td>
                <td className="text-start">RM 1000</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Table className="ranking_table">
          <thead>
            <tr>
              <th colSpan={3}>TOP WITHDRAWAL</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr>
                <td key={index + 1} className="text-end">
                  {" "}
                  <FaUserCircle />
                </td>
                <td className="text-start">Username {index + 1}</td>
                <td className="text-start">RM 1000</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

function RankingList() {
  return (
    <section className="my-5">
      <div>
        <div className="home_title">Ranking List</div>
      </div>

      <div className="desktop_side">
        <DesktopRankingTable />
      </div>
      <div className="mobile_side">
        <Tabs
          defaultActiveKey="top-deposit"
          id="fill-tab-example"
          className="mb-3 ranking_list"
          fill
        >
          <Tab eventKey="top-deposit" title="Top Deposit">
            <RankingTable />
          </Tab>
          <Tab eventKey="top-withdrawal" title="Top Withdrawal">
            <RankingTable />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="home-bg">
      <Banner />
      <SpeakerAnn />
      <Container>
      <div className="d-lg-none">
        <MobileHomeButton/>
      </div>
        <HomeGame />
        <Promo />
        <RankingList />
      </Container>
    </div>
  );
}

export default HomePage;
