import React, {useContext} from "react";
import {PRODUCTS} from "./Products";
import { ShopContext } from "./Shop-context";
import { CartItem } from "./Cart-item";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const TotalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
    <div className="cart">
        <div>
            <h1>Your cart items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) => {
                if(cartItems[product.id] !== 0) {
                    return <CartItem data={product} />;
                }
            })}

        </div>
        {TotalAmount > 0 ? 
        <div className="checkout">
            <p> SubTotal: ${TotalAmount}</p>
            <button onClick={() => navigate("/")}> Continue Shopping</button>
            <button>Checkout</button>
        </div>
       : <h1>Your Cart is Empty</h1> }
    </div>
    )
}