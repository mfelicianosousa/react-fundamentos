import React from 'react'
//import { createRoot } from 'react-dom/client'

export default function comParametro( props ){
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    // console.log(props)
    // props.nota = Math.ceil(props.nota) erro

    return (
     <div>
        <h2>{props.title}</h2>
        <p>
            <strong> {props.aluno} </strong>
            tem nota
            <strong> {props.nota}</strong>
            e está
            <strong> {status}</strong>
        </p>
        
     </div>
    )
}