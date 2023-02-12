import './App.css';
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EmployeeRegistration from './pages/EmployeeRegistration';
import ProductList from './pages/ProductList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div >
  
    <BrowserRouter>
    < NavBar />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='registration' element={<EmployeeRegistration/>}/>
            <Route path='products' element={<ProductList/>}/>
          </Routes>
        </div>
    
    </BrowserRouter>
    </div>
  ); 
}

export default App;
