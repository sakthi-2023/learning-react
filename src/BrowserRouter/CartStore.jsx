import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home2 from "./Home2";
import CartPage from "./CartPage";

export const CartContext = createContext();

function Cart() {

    const [cartCount, setCartCount] = useState(0);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home2 />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </BrowserRouter>

        </CartContext.Provider>
    );

}
export default Cart;