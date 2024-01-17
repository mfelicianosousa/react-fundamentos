import './Input.css'
import React,{useState} from 'react';

const Input = (props) => {

    const [valor, setValor] = useState(0)

    function quandoMudar(e){
        setValor(e.target.value);
    }
    return (
        <div>
            <h2>{valor}</h2>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly />
                <input value={undefined}/>
            </div>
        </div>
    )
}

export default Input;