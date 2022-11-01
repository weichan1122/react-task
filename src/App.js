import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Form, Nav, Navbar, Offcanvas,Card, ListGroup} from "react-bootstrap";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Sections/headers/template_01';
import Footer from './Sections/footer/template_02';
import HomePage from './Pages/main';
import Promo from './Pages/promotion';
import HelpPage from './Pages/help';
function Home() {
  return (
     <>
      <HomePage/>
    </>
  );
}

function Promotion() {
  return (
    <>
    <Promo/>
    </>
  );
}

function Help() {
  return (
    <>
    <HelpPage/>
    </>
  );
}
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="promotions" element={<Promotion />} />
      <Route path="help" element={<Help />} />
    </Routes>
    <Footer/>
 
  </div>
  );
}

export default App;
