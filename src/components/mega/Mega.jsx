import './Mega.css'
import React, {useState} from 'react'

export default function Mega (props) {
   
    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() *(max -min))+min ;
        return array.includes(aleatorio) 
             ? gerarNumeroNaoContido(min,max, array)
             : aleatorio
    }

    function gerarNumeros(qtde){

        const numeros = Array(qtde)
          .fill(0)
          .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1,60, nums)
            return [...nums, novoNumero]
          }, [])
          .sort((n1, n2) => n1 - n2)
        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)
   
    return (
      <div className="Mega">
            <h2>Mega Sena</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de Números</label>
                <input
                    min="6"
                    max="20" 
                    type="number"
                    value={qtde}
                    onChange={(e) =>{
                         setQtde(+e.target.value)
                         setNumeros(gerarNumeros(+e.target.value))
                    }}
                />
            </div>
            <button onClick={_=>setNumeros(gerarNumeros(qtde))}>
                Gerar Números
            </button>
     </div>
    )
}