
import React from 'react';

const ProductCards = () => {
  return (
    <CardsContainer>
      <Box
        sx={{
          marginLeft: "270px",
          padding: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="mainExploreSection">
          <h1>Descubre otros negocios</h1>
          <ul className="cards">
            {productos.map((producto) => (
              <li className="cards_item" key={producto._id}>
                <div className="card">
                  <div className="card_image"><img src={producto.imagenProducto} /></div>
                  <div className="card_content">
                    <h2 className="card_title">{producto.nombreProducto}</h2>
                    <p className="card_text">{producto.descripcionProducto}</p>
                    <p className="card_text">{producto.precio}</p>
                    <button className="boton card_btn">Acción del botón</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Box>
    </CardsContainer>
  );
};

export default ProductCards;
