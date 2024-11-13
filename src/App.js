import TestimonialsSection from './components/About';
import ClientsSection from './components/Client';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Second from './components/Second';
import Service from './components/Service';
import Dealslide from './components/Dealslide';

function App() {
  return (
    <div className="App">
      <Header />
      <Dealslide />
      <Second />
      {/* <TestimonialsSection />
      <Service />
      <ClientsSection /> */}
      <ContactUs />
      <Footer />
      {/* need add more things */}
    </div>
  );
}

export default App;
