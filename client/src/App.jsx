import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CarouselComponent from "./components/Carousel/CarouselComponent";
import Router from "./router"
import Footer from "./components/Footer/Footer";
import HomeComponent from "./pages/Home/HomeComponent";
import AboutComponent from "./components/About/AboutComponent";
import ContactComponent from "./pages/Contact/ContactComponent";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ProductListComponent from "./components/ProductList/ProductListComponent";
import ProductDetailComponent from "./components/ProductDetail/ProductDetailComponent";
import ManageProduct from "./pages/ManageProduct";
import MainLayout from "./pages/Main";
import CreateProduct from "./pages/CreateProduct";



function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Header />
        <CarouselComponent />
        <Router />
        <Footer />
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />}>
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/products" element={<ProductListComponent />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailComponent />}
            ></Route>
          </Route>
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/main" element={<MainLayout />}>
            <Route path="/main/manage-product" element={<ManageProduct />} />
            <Route path="/main/create-product" element={<CreateProduct />} />
            <Route path="/main/edit-product/:id" element={<CreateProduct />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
localhost:3000/ -> HomeComponent
localhost:3000/about -> AboutComponent
localhost:3000/products
localhost:3000/products/1
localhost:3000/contact -> ContactComponent
localhost:3000/sign-in -> 
localhost:3000/sign-up ->


*/
