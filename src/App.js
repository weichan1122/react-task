import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import HomePage from './Home';
import Promo from './Promotion';
import HelpPage from './Help';
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
      <Route path="promotion" element={<Promotion />} />
      <Route path="help" element={<Help />} />
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
