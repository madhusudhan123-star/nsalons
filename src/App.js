import Footer from './components/Footer';
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Appointment from './page/Appointment';
import About from './page/About';
import Menu from './page/Menu';
import Deals from './page/Deals';
import Branches from './page/Branches';



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/hot' element={<Deals />} />
          <Route path='/branches' element={<Branches />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
