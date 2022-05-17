import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";

const CartWidget = () => {
  
    const {cantidadTotal} = useContext(contexto)
    
    return (
      <Link to="/carrito">
        <span className="material-icons">
          shopping_cart
        </span>
          {cantidadTotal}
      </Link>
    )
  };
  
  export default CartWidget;