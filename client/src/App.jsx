import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CarouselComponent from "./components/Carousel/CarouselComponent";
import Router from "./router"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <CarouselComponent />
        <Router />
        <Footer />
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
