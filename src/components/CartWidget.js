import React from 'react'
import "../css/styles.css";
import cartIcon from '../cart-icon.png';

const CartWidget = () => {
    return (
            <img src={cartIcon} className="carticon" alt="cart" />
    )
}
	
export default CartWidget;