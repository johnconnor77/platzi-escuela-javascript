import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <div className='site'>
    <div className='sketch'>
      <div className='bee-sketch red' />
      <div className='bee-sketch blue' />
    </div>
    <h1>
      404:
      <small>No Encontrado</small>
      <small>Vuelve al Home</small>
    </h1>
  </div>
);

export default NotFound;
