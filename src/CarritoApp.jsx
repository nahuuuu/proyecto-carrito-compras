import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <Navbar></Navbar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ComprasPage />}></Route>
                        <Route path="/carrito" element={<CarritoPage />}></Route>
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
