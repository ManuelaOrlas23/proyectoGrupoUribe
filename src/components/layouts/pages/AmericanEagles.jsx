import React from 'react'
import ImagenAmerican from  '../../../assets/americanEagle/buso.png'
import {consumirDatosApi} from '../../../services/consumo'
import { useState, useEffect } from 'react'



const AmericanEagles = () => {

  const[Productos,setProductos]=useState(null)
  const[carga,setCarga]=useState(true)

  useEffect(function(){},[
    consumirDatosApi().then(function(respuestaDelBack){
        setProductos(respuestaDelBack)
        setCarga(false)
    })
])

  const imagesData = [
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},

  ];

  if(carga){
    return(
        <>
        <br /><br /><br />
        <h3>estoy cargando...</h3>
        </>
        
    )
   
}else{


    return (
      <div className="bg-sky-100 top-35 w-full grid grid-cols-3 gap-4">
        {console.log(Productos)}
        {/* Mapear el array de datos para renderizar cada imagen */}
        {Productos.map(image => (
          <div className="border p-4">
            {/* Imagen */}
            <img src={image.fotografia} className="w-full h-auto mb-2" />
            {/* Descripción */}
            <p className="text-lg font-bold">{image.descripcion}</p>
            {/* Precio */}
            <p className="text-sm">{image.precioUnitario}</p>
            {/* Botón Agregar a la compra */}
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Agregar a la compra</button>
           
          </div>
        ))}
      </div>
    );

  }
  


  
}

export default AmericanEagles