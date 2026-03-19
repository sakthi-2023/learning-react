import { useContext } from "react";
import { CartContext } from "./CartStore";

function CartPage() {

    const { cartCount } = useContext(CartContext);

    return (
        <div>
            <h1>Cart Page</h1>
            <h2>Total Items: {cartCount}</h2>
        </div>
    );

}
export default CartPage;