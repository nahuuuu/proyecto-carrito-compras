import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { NavLink } from "react-router-dom"
import { CarritoContext } from "../context/CarritoContext"
import { useContext } from "react"



export const Navbar = () => {

    const { listaCompras } = useContext(CarritoContext)
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand" >El pepe industries</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <NavLink to= "/" className="nav-link" >Compras</NavLink>
                            </li>

                        </ul>

                        <NavLink to="/carrito">
                        <Badge badgeContent={listaCompras.length} color="secondary">
                            <ShoppingCart color="action" />
                        </Badge>
                        </NavLink>
                        {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    </div>
                </div>
            </nav>


        </>
    )
}
