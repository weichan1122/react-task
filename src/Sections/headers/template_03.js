import React, { useState, useEffect } from "react";
import { Container, Button, Form, Nav, Navbar, Offcanvas,Card, ListGroup} from "react-bootstrap";
import { FaRedo, FaEye, FaAngleDown } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import { AiFillExclamationCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./template_02.css";

// hardcode initial data start
const times = [new Date()];
const menuData = [
  {
    name: "Home",
    icon: "https://macal8.com/assets/img/header/menu_01.png",
    dropdown: false,
    link: "",
  },

  {
    name: "Slot Games",
    icon: "https://macal8.com/assets/img/header/menu_w01.png",
    dropdown: true,
    link: "slots",
  },

  {
    name: "Live Casino",
    icon: "https://macal8.com/assets/img/header/menu_w02.png",
    dropdown: false,
    link: "casino",
  },

  {
    name: "Promotion",
    icon: "https://macal8.com/assets/img/header/menu_w03.png",
    dropdown: false,
    link: "promotions",
  },

  {
    name: "T & C",
    icon: "https://macal8.com/assets/img/header/menu_w04.png",
    dropdown: false,
    link: "help",
  },

  {
    name: "Vip",
    icon: "https://macal8.com/assets/img/header/menu_03.png",
    dropdown: false,
    link: "vip",
  },

  {
    name: "Mall",
    icon: "https://macal8.com/assets/img/header/menu_04.png",
    dropdown: false,
    link: "mall",
  },
];

// hardcode initial data end


const HeaderMenu = (props) => {
  const { name, icon, dropdown, link } = props;
  
  return (
    <>
    <div className="header_menu_page">
      <Link to={"./" + link} className="header_menu_content">
          <div className="header_menu_icon">
            <img src={icon} alt="header icon" />
          </div>
          <div className="font_h5 color_text header_text">{name}</div>
        </Link>
        {dropdown ?
          <div className="dropdown_content">
            <div className="dropdown_content_wrap">
              <div className="container dropdown_content_container">
                 <Link to="./slots">
                  <img src="https://storage.googleapis.com/fg_merchant_image/fg902/menu_drop/slots/2.png" alt="918KISS" className="navgameimg" width="" />
                </Link>
                <Link to="./slots">
                  <img src="https://storage.googleapis.com/fg_merchant_image/fg902/menu_drop/slots/2.png" alt="918KISS" className="navgameimg" width=""/>
                </Link>
                <Link to="./slots">
                  <img src="https://storage.googleapis.com/fg_merchant_image/fg902/menu_drop/slots/2.png" alt="918KISS" className="navgameimg" width="" />
                </Link>
                <Link to="./slots">
                  <img src="https://storage.googleapis.com/fg_merchant_image/fg902/menu_drop/slots/2.png" alt="918KISS" className="navgameimg" width="" />
                </Link>
                <Link to="./slots">
                  <img src="https://storage.googleapis.com/fg_merchant_image/fg902/menu_drop/slots/2.png" alt="918KISS" className="navgameimg" width="" />
                </Link> 
              </div>
            </div>
          </div>
          : <></>
        }
        </div>
    </>
  );
};

const ModalLanguage = () =>  {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-none d-lg-block">
        <div className="font_h5 language_header">
          <img src="http://54.254.206.220/weichan/77cepat/assets/img/my.png" alt="language flag"/>
          {/* <div className="header_current_language">language</div> */}
          <FaAngleDown />
          <div className="language_dropdown">
            <ul>
              <li>English</li>
              <li>Malay</li>
              <li>中文</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <img
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
      </Modal>*/}
    </>
  );
}

const Timer = ({ time: currentTime }) => {
  const [time, setTime] = useState(currentTime);
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date(time.getTime() + 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [currentTime, time]);
  
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
    <div className="font_h5 color_text header_time ">
        {da}-{mo}-{ye} &nbsp;
        {time2}
    </div>
  );
};

const ContactUsDesktop = () => {
  return (
    <div className="d-none d-lg-block">
      <div className="contact_wrap_d">
        <Card className="contact_front_d">
          <Card.Body>
            <div className="contact_front_d_header">
              <img src="https://b88club.net/img/contactus/contact_us_02.svg" />
              Contact Us
            </div>
          </Card.Body>
        </Card>
        <Card className="contact_back_d">
          <Card.Header className="color_primary">Contact Us</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Telegram 01234567</ListGroup.Item>
            <ListGroup.Item>Wechat 01234567</ListGroup.Item>
            <ListGroup.Item>Chat With Us 01234567</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

const BeforeLogin = () => {
  return (
    <>
      {/* <div className="color_text header_banking_info ">
        <div className="header_balance">
          <div className="header_balance_currency">myr</div>
          <div className="header_balance_amount">888,888,000</div>
        </div>
        <div className="header_balance_icon">
          <FaRedo />
          <FaEye />
          <SiAddthis />
        </div>
        <div className="header_bankinginfo_actionbtn">
          <Button className="font_h6 btn_restore ">
            Restore
          </Button>
          <Button className="font_h6 btn_gamewallet ">
            Game Wallet
          </Button>
        </div>
      </div> */}
      <div className="d-flex align-items-center justify-content-between header_menu_left">
      <div className="font_h5 color_text forgot_content">
          Forgot <u className="forgot_content_username">Username </u> or <u className="forgot_content_password">Password</u>
        </div>

              {times.map((time) => (
                <Timer key={time} time={time} />
              ))}
            
            
         
      </div>
      <div className="header_form_wrap">
        
        <Form className="header_form">
          <Form.Control
            type="text"
            placeholder="Username"
            className="font_h6 input_username"
            aria-label="Username"
          />
          <Form.Control
            type="text"
            placeholder="Password"
            className="font_h6 input_password"
            aria-label="Password"
          />
          <Button className="font_button btn_login">Login</Button>
          <Button className="font_button btn_register">Join Now</Button>
        </Form>
              <ModalLanguage />
      </div>
    </>
  );
};

const AfterLogin = () => {
  return (
    <>
      <div className="color_text header_banking_info ">
        <div className="header_balance">
          <div className="header_balance_currency">myr</div>
          <div className="header_balance_amount">888,888,000</div>
        </div>
        <div className="header_balance_icon">
          <FaRedo />
          <FaEye />
          <SiAddthis />
        </div>
        <div className="header_bankinginfo_actionbtn">
          <Button className="font_h6 btn_restore ">
            Restore
          </Button>
          <Button className="font_h6 btn_gamewallet ">
            Game Wallet
          </Button>
        </div>
      </div>
      <div className="color_text font_h5 header_banking_menu ">
        <div className="header_point_token">
          <div className="header_point">
            <img src="https://ocwin.com/assets/img/header/point.png" alt="header point" />
            <span className="header_point_text">12332123 points</span>
          </div>
          <div className="vl" />
          <div className="header_token">
            <img src="	https://ocwin.com/assets/img/header/token.png" alt="header token" />
            <span className="header_token_text">12321232 tokens</span>
          </div>
        </div>
        <div className="color_text header_banking_menu_list">
          <div className="vl" />
          <Link to="../deposit" className="color_text">Deposit</Link>
          <div className="vl" />
          <Link to="../transfer" className="color_text">Transfer</Link>
          <div className="vl" />
          <Link to="../withdraw" className="color_text">Withdraw</Link>
          <div className="vl" />
          <Link to="../history" className="color_text">History</Link>
          <div className="vl" />
        </div>
        <Button className="font_button btn_logout ">
          Logout
        </Button>
        <div className="header_noti">
          <div className="vl" />
          <img
            src="https://mcity77.com/home/img/wallet/new_icon_1207/user_svg.svg"
            alt=""
          />
          <AiFillExclamationCircle />
        </div>
      </div>

    </>
  );
};

const BeforeLoginM = () => {
  return (
    <>
      <Button className="btn_register">Join Now</Button>
      <Button className="btn_login" >Login</Button>
    </>
  );
};

const AfterLoginM = () => {
  return (
    <>

        <div className="header_noti">
          <img src="https://macal8.com/assets/img/wallet/new_icon23-12/notification.png" alt=""/>
          <AiFillExclamationCircle />
        </div>
        
        <div className="header_user">
          <img src="https://mcity77.com/home/img/wallet/new_icon_1207/user_svg.svg" alt=""/>
          <AiFillExclamationCircle />
        </div>
       
    </>
  );
};

function Header() {
  
  return (
    <>
      <div id="header" className="section">
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className="header_topbar">
            <Container className="header_topbar_container">
              <div className="header_topbar_toolbar">
                <Navbar.Toggle aria-controls={`header_menu_expand_{expand}`} />
                <Navbar.Brand href="/" className="header_logo">
                  <img src="https://www.96mmyr.com/public/html/cms/l20220111110420215.svg" alt="Logo" />
                </Navbar.Brand>
              </div>
              <div className="d-lg-none">
                <div className="header_topbar_btn">
                  <BeforeLoginM/>
                </div>
              </div>
              <Navbar.Offcanvas
                id={`header_menu_expand_${expand}`}
                className="header_sidebar"
                aria-labelledby={`header_menu_Label_expand_${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton className="color_text header_sidebar_topbar">
                  <Offcanvas.Title id={`header_sidebar_Label_expand_${expand}`}>
                    <div className="header_sidebar_logo">
                      <img src="https://macal8.com/assets/img/headerlogo.gif" alt="Logo" />
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="color_text header_sidebar_body">
                  <Nav className="header_topbar_wrap">
                    <div className="d-none d-lg-block">
                      <BeforeLogin />
                    </div>

                    <Container className="d-lg-none">
                      <div className="header_sidebar_menu">
                        {menuData.map((data, key) => {
                          return (
                            <HeaderMenu
                              key={key}
                              name={data.name}
                              icon={data.icon}
                              link={data.link}
                            />
                          );
                        })}
                        <div class="header_menu_page"><a class="header_menu_content" href="/mall"><div class="header_menu_icon"><img src="https://macal8.com/m/assets/img/sidebarimg/logout.png" alt="header icon"/></div><div class="font_h5 color_text header_text">Logout</div></a></div>
                      </div>
                    </Container>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <div className="d-none d-lg-block color_secondary header_menu">
          <Container className="header_menu_container">
           
            <div className="header_menu_right">
                {menuData.map((data, key) => {
                  return (
                      <HeaderMenu
                        key={key}
                        name={data.name}
                        icon={data.icon}
                        dropdown={data.dropdown}
                        link={data.link}
                      />
                  );
                })}

            </div>
          </Container>
        </div>
        <div className="d-lg-none">
          <div className="header_banking_info">
            <div className="header_banking_info_left">
              <div className="header_balance">
                <div className="header_balance_currency">myr</div>
                <div className="font_h2 header_balance_amount">888,888,000</div>
              </div>
              <div className="font_h3 header_balance_icon">
                <FaRedo/>
                <FaEye />
              </div>
            </div>
            <div className="header_bankinginfo_actionbtn">
              <Button className="font_h6 btn_restore " variant="">
                <img src="https://macal8.com/m/assets/img/wallet/wallet(1).png" alt="restore" />
                Restore
              </Button>
              <Button className="font_h6 btn_gamewallet " variant="">
                <img src="https://macal8.com/m/assets/img/wallet/wallet(2).png" alt="game wallet" />
                Game Wallet
              </Button>
            </div>
          </div>
        </div>
        <ContactUsDesktop />
      </div>
     
    </>
  );
}

export default Header;
