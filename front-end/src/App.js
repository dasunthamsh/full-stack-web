import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Admindashboard from "./Pages/Admin/Admindashboard";
import AddNewProduct from "./Pages/Admin/AddNewProduct";
import Footer from "./Components/Footer";
import AllProducts from "./Pages/Admin/AllProducts";
import Header from "./Components/Header";
import ViewProduct from "./Pages/ViewProduct";
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
        </Routes>
          <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
