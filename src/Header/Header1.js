import React, { useState,useEffect } from "react";
import {Container,Col,Row,Button,Form,Nav,Navbar,Offcanvas,Modal} from "react-bootstrap";
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./css/header1.css";

function ModalLanguage() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <img
          src="http://54.254.206.220/weichan/77cepat/assets/img/my.png"
          onClick={handleShow}
          width={"35px"}
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
    const { Name ,icon} = props;
    let link=Name.replace(/\s/g, "").toLowerCase();
    if(link==="home"){
      link='..';
    }
    return (
      <>
        <Link to={"./" + link} className="header_menu_page">
          <div className="header_icon">
          <img src={icon}></img>
          </div>
          {Name}
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
      let toDisplay = time.toLocaleDateString();
      // if (isJustNow(time)) {
      //   toDisplay = "Just now";
      // } else if (isToday(time))
        toDisplay = time.toLocaleTimeString('it-IT');
        let now = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(now);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(now);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(now);
        // ("en", {
        //   hour: "2-digit",
        //   minute: "2-digit"
        // });
    
      return <h6 className="text-white mb-0 mt-2">
        <span className="me-2">{da}-{mo}-{ye}</span> 
        <span>{toDisplay} (GMT+8)</span></h6>;
    };

function Header() {

  const times = [new Date()];
    return (
      <>
        {["lg"].map((expand) => (
          <Navbar key={expand} bg="primary" expand={expand} className="py-3">
            <Container fluid>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Brand href="#" className="text-white">LOGO</Navbar.Brand>
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
                  <Nav className="justify-content-end flex-grow-1 pe-3 flex-column align-items-end">
                    <div className="d-flex">
                      <Form>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          className="me-2"
                          aria-label="Username"
                        />
                        <Form.Control
                          type="text"
                          placeholder="Password"
                          className="me-2"
                          aria-label="Password"
                        />
                        <Button variant="outline-light">Login</Button>
                        <Button variant="outline-light" className="text-nowrap">
                          Join Now
                        </Button>
                      </Form>
                      <div className="desktop_side">
                        <ModalLanguage />
                      </div>
                    </div>
                    <div  className="desktop_side">
                    {times.map((time) => (
                      
                  <Timer key={time} time={time} />
                ))}
              
                    </div>
                    
                    <Container className="mobile_header_menu">
                      <div className="d-flex flex-column">
                      <HeaderMenu Name={"Home"} icon={"https://b88club.net/img/header/menu_home.svg"}/>
                      <HeaderMenu Name={"Slot Games"} icon={"https://b88club.net/img/header/menu_slot.svg"} />
                      <HeaderMenu Name={"Live Casino"} icon={"https://b88club.net/img/header/menu_live_casino.svg"} />
                      <HeaderMenu Name={"Sport"} icon={"https://b88club.net/img/header/menu_sport.svg"} />
                      <HeaderMenu Name={"Promotion"} icon={"https://b88club.net/img/header/menu_promo.svg"} />
                      <HeaderMenu Name={"Help"} icon={"https://b88club.net/img/header/menu_home.svg"} />
                      <HeaderMenu Name={"Vip"} icon={"https://b88club.net/img/header/menu_vip.svg"} />
                      <HeaderMenu Name={"Affiliate"} icon={"https://b88club.net/img/header/menu_affiliate.svg"} />

                      </div>
                    </Container>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <div  className="desktop_header_menu py-2">
        <Container>
          <Row>
            <Col>
              <HeaderMenu Name={"Home"}  icon={"https://b88club.net/img/header/menu_home.svg"}/>
            </Col>
            <Col>
              <HeaderMenu Name={"Slot Games"} icon={"https://b88club.net/img/header/menu_slot.svg"}/>
            </Col>
            <Col>
              <HeaderMenu Name={"Live Casino"} icon={"https://b88club.net/img/header/menu_live_casino.svg"}/>
            </Col>
            <Col>
              <HeaderMenu Name={"Sport"} icon={"https://b88club.net/img/header/menu_sport.svg"}/>
            </Col>
            <Col>
              <HeaderMenu Name={"Promotion"} icon={"https://b88club.net/img/header/menu_promo.svg"} />
            </Col>
            <Col>
              <HeaderMenu Name={"Help"}  icon={"https://b88club.net/img/header/menu_home.svg"} />
            </Col>
            <Col>
              <HeaderMenu Name={"Vip"} icon={"https://b88club.net/img/header/menu_vip.svg"}/>
            </Col>
            <Col>
              <HeaderMenu Name={"Affiliate"} icon={"https://b88club.net/img/header/menu_affiliate.svg"}/>
            </Col>
          </Row>
        </Container>
        </div>
      </>
    );
  }

  export default Header;