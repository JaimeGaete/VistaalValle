import React from 'react'
import ItemCount from "./ItemCount"

const ItemListContainer = () => {

    const onAdd = (contador) => { }

    return (
        <div>
            <h3>Listado de items</h3>
            <ItemCount stock={10} init={1} onAdd={onAdd} />

        </div>
    )
}

export default ItemListContainer