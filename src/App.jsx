import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from "./layout/MainLayout"
import HomePage from "./components/home/HomePage"
import NotFoundPage from "./components/ui/NotFoundPage"
import ProductPage from "./components/product/ProductPage"
import CartPage from "./components/cart/CartPage"
import {useState,useEffect} from 'react'
import api from "./api"
import OrderSummary from './components/checkout/OrderSummary';
import CheckOutPage from './components/checkout/CheckOutPage';
import LoginPage from './components/user/LoginPage';
import ProtectedRoute from './components/ui/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import UserProfilePage from './components/user/UserProfilePage';
import RegistrationPage from './components/user/RegistrationPage';
import PaymentStatusPage from './components/payment/PaymentStatusPage';


const App = () =>{
  const categories = [
    { id: 1, category: "Headset" },
    { id: 2, category: "Watch" },
    { id: 3, category: "Mobile" },
    { id: 4, category: "Laptop" },
    { id: 5, category: "Speaker" },
  ];

  const [numCartItems, setNumCartItems] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const cart_code = localStorage.getItem("cart_code")



 useEffect(function(){
  api.get(`product_category/${selectedCategory}`)
  .then(res =>{
    console.log(res.data)
    setSelectedCategory(res.data.category)
  })
  .catch(err =>{
    console.log(err.message)
  })
 },[])

  useEffect(function(){
    if(cart_code){
      api.get(`get_cart_stat?cart_code=${cart_code}`)
      .then(res =>{
        console.log(res.data)
      setNumCartItems(res.data.numCartItems)
      })
      .catch(err =>{
        console.log(err.message)
      })
    }
  },[cart_code])


  return (
    <AuthProvider>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout
           numCartItems={numCartItems}
           categories={categories}
           setSelectedCategory={setSelectedCategory}
           selectedCategory={selectedCategory}
            />}>
            <Route index element={<HomePage selectedCategory={selectedCategory}
           setSelectedCategory={setSelectedCategory} setNumCartItems={setNumCartItems}/>}></Route>
            <Route path="products/:slug" element={<ProductPage setNumCartItems={setNumCartItems}/>}></Route>
            <Route path="cart" element={<CartPage setNumCartItems={setNumCartItems}/>}></Route >
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route path='checkout' element={
              <ProtectedRoute>
                <CheckOutPage />
              </ProtectedRoute>
              }/>
            <Route path='login' element={<LoginPage />}/>
            <Route path='register' element={<RegistrationPage />}/>
            <Route path='profile' element={<UserProfilePage />} />
            <Route path='payment-status' element={<PaymentStatusPage />} />
          

            
          </Route >
        </Routes>
     </BrowserRouter>
     </AuthProvider>
  )
}

export default App