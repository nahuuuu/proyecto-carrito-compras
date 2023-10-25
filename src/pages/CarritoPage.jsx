import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const CarritoPage = () => {
    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const handleImpresion = () =>{
        print()
    }
    const calcularTotal = () => {
        return listaCompras.reduce((total,item) => total + item.price * item.cantidad, 0).toFixed(2)
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {listaCompras.map(item => (
                        
                        <tr key={item.id}>
                            <th>{item.title}</th>
                            <td>{item.price}</td>
                            <td>
                                <button className="btn btn-outline-primary" type="button" onClick={() => aumentarCantidad(item.id)}>+</button>
                                <button className="btn btn-primary" type="button">{item.cantidad}</button>
                                <button className="btn btn-outline-primary" type="button" onClick={() => disminuirCantidad(item.id)}>-</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={() => eliminarCompra(item.id)}>Eliminar</button>
                            </td>
                        </tr>

                    ))}
                    <th><b>Total:</b></th>
                    <td></td>
                    <td>${calcularTotal()}</td>
                    <td></td>

                </tbody>
            </table>

            <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={handleImpresion} disabled={listaCompras<1}>Comprar</button>
            </div>
        </>
    )
}
