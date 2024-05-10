import React, { useState, useEffect } from 'react';
import { consumirDatosApiGs } from '../../../services/consumo';

const GstarRaw = () => {
  const[Productos,setProductos]=useState(null)
  const[carga,setCarga]=useState(true)

 useEffect(()=>{
  consumirDatosApiGs().then(function(respuestaDelBack){
    setProductos(respuestaDelBack)
    setCarga(false)
})
},[])

const agregarCarrito = (image) =>{
  let currentLocalStorageValue = localStorage.getItem("carrito")
  if(currentLocalStorageValue){currentLocalStorageValue = JSON.parse(currentLocalStorageValue)}else{
    currentLocalStorageValue = []
  }
  localStorage.setItem("carrito", JSON.stringify([...currentLocalStorageValue, image]))
}

const handleTAllaSeleccionada = (productoIndex, talla) => {
  console.log('Producto ${productoIndex + 1} - Talla seleccionada: ${talla}');
}


  if(carga){
    return(
        <>
        
        <h3>estoy cargando...</h3>
        </>
        
    )
   
}else{

  return (
    <div>
      <h2 className="text-center text-4xl bg-sky-100 py-4"> G-STAR RAW</h2>

    <div className="bg-sky-100 top-35 w-full grid grid-cols-3 gap-4">
      {console.log(Productos,)}
      {/* Mapear el array de datos para renderizar cada imagen */}
      {Productos.map(image => (
        <div className="border p-4">
          {/* Imagen */}
          <img src={image.fotografia} className="w-full h-auto mb-2" />
          {/* Descripción */}
          <p className="text-lg font-bold">{image.descripcion}</p>
          {/* Precio */}
          <p className="text-sm">Precio: ${image.precioUnitario.toLocaleString('es-CO')}</p>
          {/* Talla */}
          <p className="text-sm">Talla: {image.talla}</p>
          {/* Referencia */}
          <p className="text-sm">Referencia: {image.referencia}</p>
          {/* Botón Agregar a la compra */}            
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded" onClick={()=>agregarCarrito(image)}>Agregar a la compra</button>
         
        </div>
      ))}
    </div>
      </div>
  );

}




}

export default GstarRaw;