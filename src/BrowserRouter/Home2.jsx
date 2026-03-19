import { useContext, useEffect } from "react";
import { CartContext } from "./CartStore";
import { useNavigate } from "react-router-dom";

function Home2() {

    const { cartCount, setCartCount } = useContext(CartContext);
    const navigate = useNavigate();

    function Add() {
        setCartCount(cartCount + 1);

    }
    useEffect(() => {
        console.log("Cart Updated:", cartCount);
    }, [cartCount]);

    return (
        <div>
            <h1>Home Pages</h1>

            <button onClick={Add}>Add to Cart</button>

            <button onClick={() => navigate("/cart")}>Go to Cart</button>
        </div>
    );
}
export default Home2;