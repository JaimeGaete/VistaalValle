import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { contexto } from "./CartContext"
import { db } from "./firebase"
import { collection, addDoc } from 'firebase/firestore'
import Button from '@mui/material/Button'

const SavePurchase = () => {

  const {cantidadTotal, precioTotal, carrito, vaciarCarrito} = useContext(contexto)
  const [idCompra, setIdCompra] = useState(null)

  const initialValues = { nombre: "", mail: "", mail2: "", fono: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const horaFecha = new Date().toLocaleString()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    let ret = true;
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.nombre) {
      errors.nombre = "Tu Nombre completo es requerido!";
    }
    if (!values.mail) {
      errors.mail = "Email es requerido!";
    } else if (!regex.test(values.mail)) {
      errors.mail = "El formato del email no es correcto";
    }

    if (!values.mail2) {
      errors.mail2 = "Email es requerido!";
    } else if (!regex.test(values.mail2)) {
      errors.mail2 = "El formato del email no es correcto";
    }

    if (values.mail !== values.mail2) {
      errors.mail2 = "Los correos deben ser iguales!";
    }
    
    if (!values.fono) {
      errors.fono = "El Telefono es requerido";
    } else if (values.fono.length < 9) {
      errors.fono = "El Telefono debe tener por lo menos 9 números";
    } else if (values.fono.length > 12) {
      errors.fono = "El Telefono no debe tener más de 12 números, contando +56";
    }

    if (Object.keys(errors).length !== 0)
    {
      setFormErrors(errors);
      ret = false;
    }

    return ret;
  };

  const guardarCompra = () => {
    
    if (validate(formValues))
    {
      const OCCollection = collection(db, "OC")

      const OC = {
        cliente : { nombre: formValues.nombre, telefono: formValues.fono, email: formValues.mail },
        items: carrito,
        fecha: horaFecha,
        cantidad: cantidadTotal,
        total: precioTotal
      }
  
      const consulta = addDoc(OCCollection, OC)
      consulta
      .then((resultado) => { 
          setIdCompra(resultado.id) 
          vaciarCarrito()
      }) 
      .catch((error) => {
        console.log(error)
      })
    }
  }

  return (
    <>
    {idCompra !== null ? 
    (
      <div>
        <h3>Compra exitosa!</h3>
        <h4>ID de la compra: {idCompra}</h4>
        <br></br>
        <Link to="/"><Button variant="contained">Seguir Comprando</Button></Link>
      </div>
    )
    :
    (
      <div>
        <h3>Para finalizar la Compra ingresa los siguientes datos:</h3>
        <br></br>
        <form>
          <label>Nombre completo: <br></br>
            <input type="text" name="nombre" required placeholder="Nombre y apellidos" onChange={handleChange} />
          </label>
          <p className="p-purchase">{formErrors.nombre}</p>
          <br></br>
          <label>Email: <br></br>
            <input type="text" name="mail" required placeholder="Correo electronico" onChange={handleChange} />
          </label>
          <p className="p-purchase">{formErrors.mail}</p>
          <br></br>
          <label>Confirma tu Email: <br></br>
            <input type="text" name="mail2" required placeholder="Correo electronico" onChange={handleChange} />
          </label>
          <p className="p-purchase">{formErrors.mail2}</p>
          <br></br>
          <label>Teléfono: <br></br>
            <input type="text" name="fono" required placeholder="+56" onChange={handleChange} />
          </label>
          <p className="p-purchase">{formErrors.fono}</p>
          <br></br>
          <Button variant="contained" onClick={guardarCompra}>PAGAR</Button>
        </form>
        <br></br>
      </div>
    )  
    }
    </>
  )
}

export default SavePurchase