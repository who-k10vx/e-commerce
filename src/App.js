import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Pages/Auth/Login';
import Header from './Pages/Users/Header';
import Register from './Pages/Auth/Register';
import Forget from './Pages/Auth/Forget';
import Reset from './Pages/Auth/Reset';
import LeftSidebar from './Pages/Admin/LeftSidebar';
import Products from './Pages/Admin/Products';
import Home from './Pages/Users/Home';
import Admin from './Pages/Admin/Admin';
import Addproduct from './Pages/Admin/Addproduct';
import Details from './Pages/Admin/Details';
import Customers from './Pages/Admin/Customers';
import Cust from './Pages/Admin/Cust';
import Shopping from './Pages/Users/Shopping';
  
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/forget" element={<Forget/>}/>
          <Route path="/reset" element={<Reset/>}/>
          <Route path="/LeftSidebar" element={<LeftSidebar/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/addproducts" element={<Addproduct/>}/>
          <Route path='/customers' element={<Customers/>}/>
           <Route path="/details" element={<Details/>}/>
           <Route path="/cust" element={<Cust/>}/>
          <Route path="/shopping" element={<Shopping/>}/>




        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
