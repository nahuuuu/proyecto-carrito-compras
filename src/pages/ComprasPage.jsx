import { useContext, useEffect, useState } from "react"
import { Card } from "../components/Card"
import { CarritoContext } from "../context/CarritoContext"
import { ProductosContext } from "../context/ProductosContext"

export const ComprasPage = () => {

  const {agregarCompra, eliminarCompra } = useContext(CarritoContext)
  
  const {productos} = useContext(ProductosContext) 

  const handleAgregar = (compra) =>{
    agregarCompra(compra)
  }
 
  const handleQuitar = (id) =>{
    eliminarCompra(id)
  }  
  return (
    <>
        <h1>Productos: </h1>
        <hr />

        {productos.map(producto => (
            <Card key={producto.id} 
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            handleAgregar={() => handleAgregar(producto)}
            handleQuitar={() => handleQuitar(producto.id)}
            >

            </Card>
        ))}
        
    
    
    
    </>
  )
}
