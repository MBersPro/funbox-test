import React from 'react'
import ProductsList from './productsList/ProductsList';
import "./App.css"

const App = () => {
  return (
    <>
    <div className="title-container">
      <h2 className="title">Ты сегодня покормил кота?</h2>
    </div>
      <ProductsList/>
    </>
  );
}

export default App;
