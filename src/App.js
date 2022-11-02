// import logo from './logo.svg';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Suppliers from './components/suppliers/Suppliers';
import Home from './components/Home'
import Products from './components/products/Products'
import NavBar from './components/NavBar'
import Page404 from './Page404';
import ProductForm from './components/products/ProductForm';
import Admin from './components/superuser/Admin';

import AddAdmins from './components/superuser/AddAdmins';
import { useState,useEffect } from 'react';
import Merchant from './components/merchant/Merchant';
import Clerk from './components/clerks/Clerk';
import Login from './components/Login';
import ClerkLogin from './components/clerks/ClerkLogin';
import MerchantLogin from './components/merchant/MerchantLogin';
import LineChart from './components/superuser/LineChart';
import Charts from './components/merchant/Charts';
import Landing from './components/admin/Landing'
import Prods from './components/admin/Prods'
import ClerkList from './components/admin/ClerkList'
import AddClerks from './components/admin/AddClerks'
import {  withStyles,Switch } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Background from "./assets/4.webp"
import background from "./assets/3.jpg"



function App() {

  const [LightMode, setLightMode] = useState(true)

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked" : {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch)

  // const [product, setProduct] = useState([])
  // const [store, setStore] = useState([])


  // function getProduct(){
  //   fetch("http://localhost:3000/products")
  //   .then(res => res.json())
  //   .then(product => setProduct(product))
  // }

  // useEffect(() => {
  //   getProduct();
  // }, [])

  // function getStore(){
  //   fetch("http://localhost:3000/stores")
  //   .then(res => res.json())
  //   .then(store => setStore(store))
  // }
  // useEffect(() => {
  //   getStore();
  // }, []);
  return (
    <>
    <div style={{  backgroundImage: LightMode ? `url(${Background})`: `url(${background})`,backgroundRepeat:"no-repeat"
    ,backgroundSize: "cover" , height : "100vh", color: LightMode ? "black" : "white" }}>
      <header>
        <NavBar />
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode 
            checked={LightMode}
            onChange={() => setLightMode(!LightMode)}
          />
        </div>
       
      </header>
     
      
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <Products /> }>
          <Route path='productform' element={<ProductForm/>} />
        </Route>
        <Route path ='Adminsignup' element={<AddAdmins/>}/>
        <Route path='/suppliers' element={ <Suppliers /> } />
        <Route path='merchant' element={ <Merchant/>}/>
        <Route path="clerk" element={<Clerk/>}/>
         <Route path="adminlogin" element={<Login/>}/>
         <Route path="login" element={<ClerkLogin/>}/>
          <Route path="chart" element={ <LineChart/>}/>
           <Route path="admin" element={ <Admin/>}/>
           <Route path="storeChart" element={ <Charts/>}/>
        
           <Route path="merchantLogin" element={<MerchantLogin/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/prods' element={<Prods/>}/>
        <Route path='/clerk-list' element={<ClerkList/>}/>
        <Route path='/add-clerk' element={<AddClerks/>}/>
        <Route path='*' element={<Page404 />} />

      </Routes>
      </div>
    </>
  );
}

export default App;
