import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes'; // Route handling should be here
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes /> {/* Route handling moved here */}
      <Footer />
    </Router>
  );
}

export default App;
