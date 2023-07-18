import logo from './logo.svg';
import './App.css';
import Mynavbar from './components/Navbar';
import Myfooter from './components/Footer';
import Myabout from './components/About';
import Myside from './components/Side';
import Myexample from './components/Example';
import Mybelow from './components/Below';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';





function App() {
  return (
<Router>
      < Mynavbar/>
      <Routes>
        <Route path='/' element={<Myside/>} />
        <Route path='/aboutus' element={<Myabout/>} />
        <Route path='/ourbusiness' element={<Myexample/>} />
        <Route path='/contactus' element={<Mybelow/>} />
      </Routes>
    </Router>
  
    
  );
}

export default App;