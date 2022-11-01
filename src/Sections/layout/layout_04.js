import { Card, Row, Col,CardGroup } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./layout_04.css";



const HaveContent2 = () => {
  return (
    <>
 <CardGroup>
      <div className="col-lg-6 col-md-6 col-sm-12">
      <Card className="d-flex flex-row me-md-2">
        <Card.Img variant="top" src="img/800x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
      </div>
      <div className="col-lg-6 col-md-6 d-none d-md-block">
      <Card className="d-flex flex-row  me-md-2">
        <Card.Img variant="top" src="img/800x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
      </div>
      
    
    </CardGroup>
    </>
  );
}







const Template1 = () => {
  return (
    <>
      <HaveContent2 />
    </>
  );
};


export default Template1;
