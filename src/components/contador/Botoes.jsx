import "./Botoes.css";
import React from 'react';

const Botoes = (props) => {
    return (
        <div>
             <div>
                <button onClick={props.setInc}>+</button>
                <button onClick={props.setDec}>-</button>
            </div>
        </div>
    )
}
export default Botoes;
