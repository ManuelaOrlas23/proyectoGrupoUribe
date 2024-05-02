import React from 'react'
import ImagenChevignon from '../../../assets/chevignon/camiseta-chevignon.jpg'

const Chevignon = () => {
  const imagesData = [
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},
    {id: 1, src: [ImagenChevignon], description: 'Camiseta Chevignon', precio: '$250.000'},

  ];

  return (
    <div className="bg-sky-100 top-35 w-full grid grid-cols-3 gap-4">
      {/* Mapear el array de datos para renderizar cada imagen */}
      {imagesData.map(image => (
        <div key={image.id} className="border p-4">
          {/* Imagen */}
          <img src={image.src} alt={image.description} className="w-full h-auto mb-2" />
          {/* Descripción */}
          <p className="text-lg font-bold">{image.description}</p>
          {/* Precio */}
          <p className="text-sm">{image.precio}</p>
          {/* Botón Agregar a la compra */}
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Agregar a la compra</button>
        </div>
      ))}
    </div>
  )
}

export default Chevignon