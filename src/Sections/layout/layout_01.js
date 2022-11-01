import { Card, Row, Col,CardGroup } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./layout_01.css";

const HaveContent1 = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
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
        </div>
        <div className="col-lg-4 col-md-6 d-none d-md-block">
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
        </div>
        <div className="col-lg-4 col-md-4 d-none d-lg-block">
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
        </div>
      </div>
    </>
  );
}

const HaveContent2 = () => {
  return (
    <>
 <CardGroup>
 <div className="col-lg-4 col-md-6 col-sm-12">
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
      </div>
      <div className="col-lg-4 col-md-6 d-none d-md-block">
      <Card className="d-flex flex-row  me-md-2">
        <Card.Img variant="top" src="img/800x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className="col-lg-4 col-md-4 d-none d-lg-block">
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
      </div>
    
    </CardGroup>
    </>
  );
}

const HaveContent3 = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-6">
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
        </div>
        <div className="col-lg-3 col-md-6 col-6 ">
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
        </div>
        <div className="col-lg-3 d-none d-lg-block">
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
        </div>
        <div className="col-lg-3 d-none d-lg-block">
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
        </div>
      </div>
    </>
  );
}
const HaveContent4 = () => {
  return (
    <>
 <CardGroup>
 <div className="col-lg-6 col-md-6 col-sm-12">
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
      </div>
      <div className="col-lg-6 col-md-6 d-none d-md-block">
      <Card className="d-flex flex-row  me-md-2">
        <Card.Img variant="top" src="img/1600x800.png" />
        <Card.Body className="color_primary">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
     
    
    </CardGroup>
    </>
  );
}

const NoContent1 = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 d-none d-md-block">
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 d-none d-lg-block">
          <Card>
            <Card.Img variant="top" src="img/1600x800.png" />
          </Card>
        </div>
      </div>
    </>
  );
}

const NoContent2 = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-6">
          <Card>
            <Card.Img variant="top" src="img/800x800.png" />
          </Card>
        </div>
        <div className="col-lg-3 col-md-6 col-6">
          <Card>
            <Card.Img variant="top" src="img/800x800.png" />
          </Card>
        </div>
        <div className="col-lg-3 d-none d-lg-block">
          <Card>
            <Card.Img variant="top" src="img/800x800.png" />
          </Card>
        </div>
        <div className="col-lg-3 d-none d-lg-block">
          <Card>
            <Card.Img variant="top" src="img/800x800.png" />
          </Card>
        </div>
        
    
      </div>
    </>
  );
}

const NoContent3 = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-6">
          <Card>
            <Card.Img variant="top" src="img/800x1600.jpg" />
          </Card>
        </div>
        <div className="col-lg-3 col-md-6 col-6">
          <Card>
            <Card.Img variant="top" src="img/800x1600.jpg" />
          </Card>
        </div>
        <div className="col-lg-3 d-none d-lg-block">
          <Card>
            <Card.Img variant="top" src="img/800x1600.jpg" />
          </Card>
        </div>
        <div className="col-lg-3 d-none d-lg-block">
          <Card>
            <Card.Img variant="top" src="img/800x1600.jpg" />
          </Card>
        </div>
       
      
        
      </div>
    </>
  );
}
const Template1 = () => {
  return (
    <>
      <NoContent3 />
    </>
  );
};


export default Template1;
