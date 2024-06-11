import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Admindashboard from "./Pages/Admin/Admindashboard";
import AddNewProduct from "./Pages/Admin/AddNewProduct";
import Footer from "./Components/Footer";
import AllProducts from "./Pages/Admin/AllProducts";
import Header from "./Components/Header";
import ViewProduct from "./Pages/ViewProduct";
import Signup from "./Pages/Signup";
import Men from "./Pages/Men";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";
import Login from "./Pages/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Footer />} />
            <Route path='/add-product' element={<AddNewProduct />}></Route>
            <Route path='/admin-dashboard' element={<Admindashboard />}></Route>
            <Route path='/products-table' element={<AllProducts />}></Route>
            <Route path="/product/:id" element={<ViewProduct/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
            <Route path="/women" element={<Womens/>}></Route>
            <Route path="/kid" element={<Kids/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
          <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
