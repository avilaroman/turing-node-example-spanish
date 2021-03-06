import React from 'react';

const LandingPage = ({slug}) => {
  const text = (slug) => {
    switch(slug) {
      case "1": {
        return 'REGIONAL'
      }
  
      case "2": {
        return 'NATURAL'
      }
      case "3": {
        return 'DE TEMPORADA'
      }
  
      default: {
        return 'NUEVAS TENDENCIAS, ESTILOS COOL, LA MEJOR COMPRA'
      }
    }
  }
  return (
    <div className="landing-page">
      <div>
        {text(slug)}
        </div>
    </div>
  );
};

export default LandingPage;