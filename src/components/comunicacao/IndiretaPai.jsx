import React,{ useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = props => {
    // nome, idade, nerd
  
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd){
       setNome(nome)
       setIdade(idade)
       setNerd(nerd) 
    }
    return (
        <div>
            <div>Pai</div>
            <span> {nome} </span>
            <span> <strong>{idade}</strong> </span>
            <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            
            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    )
}

export default IndiretaPai;