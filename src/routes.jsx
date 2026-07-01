import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Checkout from "./pages/checkout/Checkout";
import Faq from "./pages/faq/Faq";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import UserContextProvider from "./context/UserContexs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "login",
                element: <UserContextProvider>
                    <Login />
                </UserContextProvider>,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
            {
                path: "faq",
                element: <Faq />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "product",
                element: <Product />,
            },
            {
                path: "cart",
                element:
                    <UserContextProvider>
                        <Cart />
                    </UserContextProvider>,
            }

        ]

    },
]);
export default router;