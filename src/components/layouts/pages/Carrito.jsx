import { useEffect, useState } from "react"

const Carrito = () => {

    const [listaCarrito, setListaCarrito] = useState([])

    useEffect(() => {
        let carrito = localStorage.getItem("carrito")
        if (!carrito) {
            setListaCarrito([])
        } else {
            setListaCarrito(JSON.parse(carrito))
        }


    }, [])

    const handleEliminar = (idProducto) => {
        const nuevoCarrito = listaCarrito.filter(producto => producto.id_producto !== idProducto)
        setListaCarrito(nuevoCarrito)
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito))

    }
    return (
        <div>
            <h2 className="text-center text-4xl bg-sky-100 py-4">COMPRAS</h2>

            <div className="bg-sky-100 top-35 w-full grid grid-cols-5 gap-4">
                {listaCarrito.map(producto => (
                    <div className="border p-4" key={producto.id_producto}>
                        {/* Imagen */}
                        <img src={producto.fotografia} className="w-24 h-24 object-cover mb-2" alt={producto.descripcion} />
                        {/* Descripción */}
                        <p className="text-lg font-bold">{producto.descripcion}</p>
                        {/* Precio */}
                        <p className="text-sm">Precio: ${producto.precioUnitario.toLocaleString('es-CO')}</p>
                        {/* Talla */}
                        <p className="text-sm">Talla: {producto.talla}</p>
                        {/* Botón Eliminar */}
                        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded" onClick={() => handleEliminar(producto.id_producto)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrito