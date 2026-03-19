import { useContext } from "react";
import { CartContext } from "./CartStore";
import { useNavigate } from "react-router-dom";

function CartPage() {

    const navigate = useNavigate();
    const { cartCount } = useContext(CartContext);

    const BackToHome = () => { navigate("/") }

    return (
        <div>
            <h1>Cart Page</h1>
            <h2>Total Items: {cartCount}</h2>
            <button onClick={BackToHome} >Back To Home</button>
        </div>
    );

}
export default CartPage;