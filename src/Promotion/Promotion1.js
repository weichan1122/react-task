import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Nav,
  Navbar,
  Offcanvas,
  Modal,Card
} from "react-bootstrap";
import "./promotion1.css";

const PromoTab = () => {
  return (
    <>
      <ul className="nav promo_tab">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            All
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Slot games
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Live Casino
          </a>
        </li>
      </ul>
    </>
  );
};

const PromoContainer = () => {
  return (
    <>
      <div className="promotion_container">
      <div className="row">
      
         
            {Array.from({ length: 9 }).map((_, index) => (
              <div className="col-md-4 mt-md-0 mt-3 mb-4">    
                <Card>
                <Card.Img variant="top" src="img/1600x800.png" />
                <Card.Body>
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
            ))}
      
        </div>
      </div>
    </>
  );
};

function PromoPage() {
  return (
    <div className="promo-bg">
    <Container>
      <PromoTab />
      <PromoContainer />
    </Container>
    </div>
  );
}

export default PromoPage;
