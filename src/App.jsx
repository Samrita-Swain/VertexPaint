import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import IndexScrollToTop from './Components/ScrollToTop/IndexScrollToTop';
import Header from './Components/Header';
import RoutesComponent from './Components/RoutesComponent';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <IndexScrollToTop />
      <Header />
      <RoutesComponent />
      <Footer/>
    </Router>
  );
}

export default App;
