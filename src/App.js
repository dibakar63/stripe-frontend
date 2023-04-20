import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './componenets/Navbar';
import {Container} from 'react-bootstrap'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Store from './pages/Store.js';
import Success from './pages/Success.js';
import Cancel from './pages/Cancel.js';
import { CartProvider } from './CartContext';
function App() {
  return (
    <CartProvider>
      <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
      <Routes>
        <Route index element={<Store/>}/>
        <Route path='success' element={<Success/>}/>
        <Route path='cancel' element={<Cancel/>}/>
        </Routes>
      </BrowserRouter>
      
    </Container>
    </CartProvider>
   
  );
}

export default App;
