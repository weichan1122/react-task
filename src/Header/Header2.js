import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Nav,
  Navbar,
  Offcanvas,
  Modal,
  Dropdown,Card,ListGroup,Tab
} from "react-bootstrap";
import { FaRedo, FaEye,FaAngleDown } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import { AiFillExclamationCircle } from "react-icons/ai";

// import { HiOutlineEllipsisVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header2.css";

function ModalLanguage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="d-none d-lg-block">
      <div className="d-flex align-items-center py-2 position-relative language_header">
      <img
        src="http://54.254.206.220/weichan/77cepat/assets/img/my.png"
        onClick={handleShow}
        width={"25px"}
        alt="language img"
      />
      <div className="ms-2 text-capitalize">English</div>
      <FaAngleDown/>
      <div className="language_dropdown">
        <ul>
          <li>English</li>
          <li>Malay</li>
          <li>中文</li>
        </ul>
      </div>
      </div>
     
</div>
<img
        src="http://54.254.206.220/weichan/77cepat/assets/img/my.png"
        onClick={handleShow}
        width={"25px"}
        alt="language img"
        className="d-lg-none"
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const HeaderMenu = (props) => {
  const { Name, icon ,dropdown} = props;
  let link = Name.replace(/\s/g, "").toLowerCase();
  var dropdownContent={};
  

  if (link === "") {
    link = "..";
  }
  else if(link === "t&c"){
    link = "../help";
  }else{
    
  }

  if(dropdown!=null){
    dropdownContent = {
      html: '<div class="dropdown_content"><div class="d-flex flex-wrap align-items-center justify-content-center"><div class="container"><a href="slots"><img src="https://storage.googleapis.com/fg_merchant_image/fg902/menu_drop/slots/2.png" alt="918KISS" class="navgameimg" width=""></a><a href="slots"><img src="https://storage.googleapis.com/fg_merchant_image/fg902/menu_drop/slots/2.png" alt="918KISS" class="navgameimg" width=""></a><a href="slots"><img src="https://storage.googleapis.com/fg_merchant_image/fg902/menu_drop/slots/2.png" alt="918KISS" class="navgameimg" width=""></a><a href="slots"><img src="https://storage.googleapis.com/fg_merchant_image/fg902/menu_drop/slots/2.png" alt="918KISS" class="navgameimg" width=""></a><a href="slots"><img src="https://storage.googleapis.com/fg_merchant_image/fg902/menu_drop/slots/2.png" alt="918KISS" class="navgameimg" width=""></a></div></div></div>'
      }
  }else{
    dropdownContent={}
  }
  return (
    <>
      <Link to={"./" + link} className="header_menu_page py-2">
        <div className="header_icon">
          <img src={icon} alt="header icon" />
        </div>
        <div className="header_text">{Name}</div>
        {
          
        }
        <div dangerouslySetInnerHTML={{ __html: dropdownContent.html }} />
      </Link>
    </>
  );
};

// const Tick = () => {
//   const now = new Date();
//   const h = now.getHours();
//    const m = now.getMinutes();
//     const s = now.getSeconds();
//     useEffect(() => {
//       const interval = setInterval(() => {
//         const html = `
//         <span>${h}</span> :
//         <span>${m}</span> :
//         <span>${s}</span>
//         `
//         console.log(html)
//       }, 1000);
//       return () => clearInterval(interval);
//     }, []);

//     return (
//       <>
//       <div>{html}</div>
//       </>
//     );
// };

// const isJustNow = (time) => Date.now() - time < 5000;
// const isToday = (time) => Date.now() - time < 24 * 60 * 1000;
const Timer = ({ time: currentTime }) => {
  const [time, setTime] = useState(currentTime);
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date(time.getTime() + 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [currentTime, time]);
  // let toDisplay = time.toLocaleDateString();
  // if (isJustNow(time)) {
  //   toDisplay = "Just now";
  // } else if (isToday(time))
  // toDisplay = time.toLocaleTimeString("it-IT");
  let now = new Date();
  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(now);
  let mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(now);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(now);
  let time2 = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now);

  return (
    <div className="text-white mb-0 ">
      <span className="me-2">
        {da}-{mo}-{ye} &nbsp;
        {time2}
      </span>
      {/* <span className="d-none">{toDisplay}</span> */}
    </div>
  );
};

const ContactUsDesktop=()=>{
return(<div className="d-none d-lg-block">
  <div className="contact-wrap-d">
    <Card className="contact-front-d">
      <Card.Body>
        <div className="d-flex align-items-center">
        <img src="https://b88club.net/img/contactus/contact_us_02.svg"/>
        Contact Us
        </div>
        </Card.Body>
    </Card>
    <Card className="contact-back-d">
      <Card.Header>Contact Us</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Telegram 01234567</ListGroup.Item>
          <ListGroup.Item>Wechat 01234567</ListGroup.Item>
          <ListGroup.Item>Chat With Us 01234567</ListGroup.Item>
        </ListGroup>
    </Card>
    </div>
</div>)
}




const BeforeLogin = () => {
  return(
    <> 
    <div className="forgot_content  me-2">
    Forgot <u className="text-danger">Username</u> or{" "}
    <u className="text-danger">Password</u>
  </div>
  <Form>
    <Form.Control
      type="text"
      placeholder="Username"
      className="me-1"
      aria-label="Username"
    />
    <Form.Control
      type="text"
      placeholder="Password"
      className="me-1"
      aria-label="Password"
    />
    <Button variant="outline-light" >Login</Button>
    <Button variant="outline-light" className="text-nowrap">
      Join Now
    </Button>
  </Form>
  </>
  );
};


const AfterLogin = () => {
  return(
    <> 
  <div className="after_login_wrap">
  <div className="d-flex align-items-center">
      <img src="https://ocwin.com/assets/img/header/point.png" alt="" width="20px" className="me-1"/>
      <span>12332123 points</span>
    </div>
  <div className="vl"/>
    <div className="d-flex align-items-center">
      <img src="	https://ocwin.com/assets/img/header/token.png" alt="" width="20px" className="me-1"/>
      <span>12321232 tokens</span>
    </div>
    <div className="vl"/>
      <Link to="../deposit">Deposit</Link>
    <div className="vl"/>
      <Link to="../transfer">Transfer</Link>
    <div className="vl"/>
     <Link to="../withdraw">Withdraw</Link>
    <div className="vl"/>
    <Link to="../history">History</Link>
    <div className="vl"/>
    <Button variant="outline-light" className="text-nowrap">
      Logout
    </Button>
    <div className="header_noti d-flex">
    <div className="vl"/>
      <img src="https://mcity77.com/home/img/wallet/new_icon_1207/user_svg.svg" alt="" />
      <AiFillExclamationCircle/>
    </div>
    </div>
  </>
  );
};

function Header() {
  const times = [new Date()];
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar_header py-2">
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="/" className="text-white p-0">
              LOGO
            </Navbar.Brand>
            <div className="mobile_side">
              <ModalLanguage />
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  LOGO
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1  flex-column align-items-end pe-4">
                  <div className="d-none d-lg-block text-white">
                    <div className="d-flex align-items-center justify-content-end up_header_content">
                      <div>MYR 888,888,000</div>
                      <FaRedo className="ms-2" />
                      <FaEye className="ms-2" />
                      <SiAddthis className="ms-2" />
                      <Button variant="outline-light" className="ms-2">
                        Restore
                      </Button>
                      <Button variant="outline-light" className="text-nowrap">
                        Promo Claims
                      </Button>
                    </div>
                    <div className="d-flex align-items-center down_header_content">
                     <AfterLogin/>
                    </div>
                  </div>

                  <Container className="mobile_header_menu">
                    <div className="d-flex flex-column">
                      <HeaderMenu
                        Name={"Home"}
                        icon={"https://macal8.com/assets/img/header/menu_01.png"}
                      />
                      <HeaderMenu
                        Name={"Slot Games"}
                        icon={"https://macal8.com/assets/img/header/menu_w01.png"}
                      />
                      <HeaderMenu
                        Name={"Live Casino"}
                        icon={
                          "https://macal8.com/assets/img/header/menu_w02.png"
                        }
                      />
                      <HeaderMenu
                        Name={"Promotion"}
                        icon={"https://macal8.com/assets/img/header/menu_w03.png"}
                      />
                      <HeaderMenu
                        Name={"T & C"}
                        icon={"https://macal8.com/assets/img/header/menu_w04.png"}
                      />
                      <HeaderMenu
                        Name={"Vip"}
                        icon={"https://macal8.com/assets/img/header/menu_03.png"}
                      />
                        
                  <HeaderMenu
                    Name={"Mall"}
                    icon={"https://macal8.com/assets/img/header/menu_04.png"}
                  />
               
                    </div>
                  </Container>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div className="d-none d-lg-block  desktop_header_menu pe-4">
        <Container>
          <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center ">
            {times.map((time) => (
              <Timer key={time} time={time} />
            ))}
             <div className="vl"/>
            <ModalLanguage />
            </div>
            <div>
              <Row>
                <Col>
                  <HeaderMenu
                    Name={"Home"}
                    icon={"https://macal8.com/assets/img/header/menu_01.png"}
                  />
                </Col>
                <Col>
                  <HeaderMenu
                    Name={"Slot Games"}
                    icon={"https://macal8.com/assets/img/header/menu_w01.png"}
                    dropdown={true}
                  />
                </Col>
                <Col>
                  <HeaderMenu
                    Name={"Live Casino"}
                    icon={"https://macal8.com/assets/img/header/menu_w02.png"}
                  />
                </Col>
                <Col>
                  <HeaderMenu
                    Name={"Promotion"}
                    icon={"https://macal8.com/assets/img/header/menu_w03.png"}
                  />
                </Col>
                <Col>
                  <HeaderMenu
                    Name={"T & C"}
                    icon={"https://macal8.com/assets/img/header/menu_w04.png"}
                  />
                </Col>
                <Col>
                  <HeaderMenu
                    Name={"Vip"}
                    icon={"https://macal8.com/assets/img/header/menu_03.png"}
                  />
                </Col>
                <Col>
                  <HeaderMenu
                    Name={"Mall"}
                    icon={"https://macal8.com/assets/img/header/menu_04.png"}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <ContactUsDesktop />
    </>
  );
}

export default Header;
