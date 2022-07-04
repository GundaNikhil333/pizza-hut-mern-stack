import './App.css';
import {Container} from "react-bootstrap";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import TopBar from './components/TopBar';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/cartScreen';
import Registe from './screens/Registe';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';
function App() {
  return (
   <BrowserRouter>
   <TopBar/>
   <NavBar/>
   <Routes>
   <Route path="/admin" element={<AdminScreen/>}></Route> 
   <Route path="/orders" element={<OrderScreen/>}></Route> 
   <Route path="/login" element={<Login/>}></Route> 
   <Route path="/register" element={<Registe/>}></Route> 
    <Route path="/cart" element={<CartScreen/>}></Route> 
    <Route path="/Contact" element={<Contact/>}></Route> 
    <Route path="/policy" element={<Policy/>}></Route> 
    <Route path="/" element={<HomeScreen/>}></Route> 
   </Routes>
   </BrowserRouter>
  );
}

export default App;
