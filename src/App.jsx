import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';
import RoutesComponent from './Components/RoutesComponent';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <RoutesComponent />
      <Footer/>
    </Router>
  );
}

export default App;
