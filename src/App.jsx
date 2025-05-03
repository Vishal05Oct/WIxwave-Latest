import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes'; // Route handling should be here
import ScrollToTop from './components/ScrollToTop';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes /> {/* Route handling moved here */}
    </Router>
  );
}

export default App;
