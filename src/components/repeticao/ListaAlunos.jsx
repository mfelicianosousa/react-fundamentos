import React from 'react';
import alunos from '../../data/alunos'

const ListaAlunos = (props) => {
    // console.log(alunos)

    const lis = alunos.map((aluno) =>{
       return (
         <li key={aluno.id}>
            {aluno.id} {aluno.matricula} {aluno.nome} {aluno.nota} {aluno.situacao}
         </li>
       );
    });

    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {lis}
            </ul>

        </div>

    );
}

export default ListaAlunos;