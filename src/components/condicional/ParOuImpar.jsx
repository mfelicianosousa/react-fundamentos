import React from 'react';

const ParOuImpar = props => {
   
    //const resultado = props.numero % 2 === 0 ? 'Par':'Impar';
    const isPar = props.numero % 2 === 0 ;
    
    console.log(isPar);

    return (
        <div>
            {/* <span>Número : {props.numero} é {resultado}</span> */}
            <p>Número:  {props.numero}</p>
            { isPar ? <span>É Par</span> : <span>É Ímpar</span>}
        </div>
    )
}

export default ParOuImpar;