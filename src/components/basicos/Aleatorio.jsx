import React from 'react'

const Aleatorio = (props) => { 
    // const min = props.min;
    // const max = props.max;
    const {min, max} = props;

    //const [a, b] = [1, 2]
    //const {c, d, x} = {c: 12, d: 45, x: 'teste'}


    const aleatorio = parseInt(Math.random()*(max - min))+min;
    return (
        <div>
            <h2>Valor Aleatorio</h2>
            <p><strong>Valor Mínimo: </strong>{min}</p>
            <p><strong>Valor Máximo: </strong>{max}</p>
            <p><strong>Valor Escolhido: </strong>{aleatorio}</p>

        </div>
    )
}


export default Aleatorio