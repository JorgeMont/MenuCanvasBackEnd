import React from 'react';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonGratis() {
  return (
    <>
    
    <div id='bottomFree' className="gap-5 m-5"  style={{textAlign:'center'}} >
    <h1 className="m-4"  >Elije un plan a tu medida.</h1>
      
      <Button variant="primary" size="lg" style={{ width: '38rem' } } >
        Inicia prueba gratis de 1 mes *
      </Button>
      
    </div>
    </>
  );
}

export default ButtonGratis;