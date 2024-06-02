import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Admindashboard from "./Pages/Admin/Admindashboard";
import AddNewProduct from "./Pages/Admin/AddNewProduct";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Footer />} />
            {/*<Route path="/admin" element={<Admindashboard />} />*/}
            <Route path='/add-product' element={<AddNewProduct />}></Route>
            <Route path='/admin-dashboard' element={<Admindashboard />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
