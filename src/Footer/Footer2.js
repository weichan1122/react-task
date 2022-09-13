import { Link } from "react-router-dom";
import "./footer2.css";
const Footer2 = () => {
  return (
    <footer className="page-footer font-small blue py-4 bg-dark text-white mt-auto">
      <div className="container-lg text-center text-lg-left">
        <div className="row">
          {/* <div className="col-lg-6 mt-lg-0 mt-3">
              <div className="text-uppercase">Footer Content</div>
              <p>
                Here you can use rows and columns to organize your footer content.
              </p>
            </div> */}

          {/* <hr className="clearfix w-100 d-lg-none pb-0" /> */}

          <div className="col mb-lg-0 mb-3 text-start">
            <div className="text-uppercase">Gaming License</div>
            <ul className="list-unstyled d-flex justify-content-left">
              <li>
               <img src="https://macal8.com/assets/img/footer/1.svg"/>
              </li>
            </ul>
          </div>

          <div className="col mb-lg-0 mb-3 text-start">
            <div className="text-uppercase">Certification</div>
            <ul className="list-unstyled d-flex justify-content-left">
              <li>
              <img src="https://macal8.com/assets/img/footer/2.svg" width={"70px"}/>
              </li>
              &nbsp;
              <li>
              <img src="https://macal8.com/assets/img/footer/3.svg"/>
              </li>
              <li>
              <img src="https://macal8.com/assets/img/footer/5.svg"/>
              </li>
            </ul>
          </div>

          <div className="col mb-lg-0 mb-3 text-center d-none d-lg-block">
            <div className="text-uppercase">Suggested Browser</div>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
              <img src="https://macal8.com/assets/img/footer/6.svg"/>
              </li>
              &nbsp;
              <li>
              <img src="https://macal8.com/assets/img/footer/7.svg"/>
              </li>
            </ul>
          </div>

          <div className="col mb-lg-0 mb-3 text-center">
            <div className="text-uppercase">Payment Method</div>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
              <img src="https://macal8.com/assets/img/footer/10.svg"/>
              </li>
              &nbsp;
              <li>
              <img src="https://macal8.com/assets/img/footer/ipay4u.png"/>
              </li>
            </ul>
          </div>

          <div className="col mb-lg-0 mb-3 text-start d-none d-lg-block">
            <div className="text-uppercase">Responsible Gaming</div>
            <ul className="list-unstyled d-flex justify-content-left">
              <li>
              <img src="https://macal8.com/assets/img/footer/12.svg"/>
              </li>
              &nbsp;
              <li>
              <img src="https://macal8.com/assets/img/footer/13.svg"/>
              </li>
              &nbsp;
              <li>
              <img src="https://macal8.com/assets/img/footer/14.svg"/>
              </li>
            </ul>
          </div>
        </div>

        <div className="row d-none d-lg-block">
          <div className="row ">
          {/* <div className="col-lg-6 mt-lg-0 mt-3">
              <div className="text-uppercase">Footer Content</div>
              <p>
                Here you can use rows and columns to organize your footer content.
              </p>
            </div> */}

          {/* <hr className="clearfix w-100 d-lg-none pb-0" /> */}

          <div className="col-lg-9  mb-lg-0 mb-3 ">
            <div className="d-flex">
              <Link to="../about-us" className="me-1 ms-1">About Us</Link>|
              <Link to="../term-and-conditions" className="me-1 ms-1">Terms and Conditions</Link>|
              <Link to="../how-to-deposit" className="me-1 ms-1">How To Deposit</Link>|
              <Link to="../how-to-transfer" className="me-1 ms-1">How To Transfer</Link>|
              <Link to="../how-to-withdraw" className="me-1 ms-1">How To Withdraw</Link>
            </div>
          </div>

          <div className="col-lg-3 mb-lg-0 mb-3 text-end footer-copyright">© 2022 Copyright: Footer</div>
        </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-6 mt-lg-0 mt-3">
              <div className="text-uppercase">Footer Content</div>
              <p>
                Here you can use rows and columns to organize your footer content.
              </p>
            </div> */}

          {/* <hr className="clearfix w-100 d-lg-none pb-0" /> */}
          <div className="col-lg-12 mb-lg-0 mb-3 text-start">
            <div className="text-uppercase m-0">Welcome to Our Online Casino</div>
            <div className="footer-content">
            We provide a stress-free and less complicated way for customers to do deposit and withdraw electronically. You just need to follow certain simple step provided in Info Centre then each transaction can be completed easily. These features make gaming safe as well as enjoyable so players feel comfortable when committing to our site . 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
