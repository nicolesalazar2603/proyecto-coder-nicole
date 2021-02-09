import React, { useState} from 'react';

const ItemListContainer = ({greeting}) => {

    return (
        <a className= "h1"> {greeting} </a>
    )
}

const ItemList = [
    {
      id: 'a',
      Nombre: 'Plancha',
      Descripcion: 'Plancha termica',
      Precio: '20.000',
      pictureUrl:''
    },
    {
      id: 'b',
      Producto: 'Lavadora',
      Nombre: 'Lavadora electrica',
      Precio: '60.000',
      pictureUrl:''
    },
  ];
   
  const ComplexList = () => (
    <ul>
      {ItemList.map(item => (
        <li key={item.id}>
          <div>{item.Producto}</div>
          <div>{item.Nombre}</div>
          <div>{item.Descripcion}</div>
          <div>{item.Precio}</div>
          <div>{item.pictureUrl}</div>
        </li>
      ))}
    </ul>
  );


export default ComplexList;
