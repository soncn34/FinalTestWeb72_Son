import { BrowserRouter, Routes, Route } from "react-router-dom";
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



const Router = () => {

  // const dispatch = useDispatch()

  // const user = useSelector((state) => state.users?.user)

  // useEffect(() => {
  //   const user = localStorage.getItem("user")
  //   const token = localStorage.getItem("token")

  //   if (user) {
  //     dispatch(loginSuccess({ user: JSON.parse(user), token }))
  //   }
  // }, [])

  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<HomeComponent />}>
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/products" element={<ProductListComponent />} />
          <Route
            path="/products/:productId"
            element={<ProductDetailComponent />}
          ></Route>
          <Route path="/contact" element={<ContactComponent />} />
        </Route>
        <Route path="/main" element={<MainLayout />} />
        <Route path="/manage-product" element={<ManageProduct />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default Router