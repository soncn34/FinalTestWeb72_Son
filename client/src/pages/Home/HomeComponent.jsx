import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Categories from "../../components/Category/Categories";
import Header from "../../components/Header/Header";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import Footer from "../../components/Footer/Footer";

const HomeComponent = () => {
  // const navigate = useNavigate();
  // const isLoggedIn = false;

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/sign-in");
  //   }
  // }, []);

  return (
    <div>
      <Header />
      <CarouselComponent />
      <Categories />
      <Footer />
    </div>
  );
};

export default HomeComponent;
