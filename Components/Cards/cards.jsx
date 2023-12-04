import React from 'react';
import BusinessCard from './components/BusinessCard';

const businesses = [
  {
    id: 1,
    image: 'url_de_la_imagen',
    name: 'Nombre del negocio 1',
    description: 'Breve descripción del negocio 1',
  },
  // Agrega más objetos de negocios según tus datos en la base de datos
];

const App = () => {
  return (
    <div>
      {businesses.map((info) => (
        <BusinessCard key={info.id} info={info} />
      ))}
    </div>
  );
};

export default App;
