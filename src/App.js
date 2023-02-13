import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter,Routes, Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
//import Registerscreen from './screens/Registerscreen';
//import Loginscreen from './screens/Loginscreen';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
      
      <Routes>
      <Route path='/' exact component={<Homescreen/>}/>
      <Route path='/cart' component={<Cartscreen/>}/>
      </Routes>
      </BrowserRouter>
    
   
    
    </div>
  );
}

export default App;
    