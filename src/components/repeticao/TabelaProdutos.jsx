import './TabelaProdutos.css'
import React from 'react';
import produtos from '../../data/produtos'

const TabelaProdutos = (props) => {
    // console.log(alunos)

    
    function getLinhas(){
        return produtos.map((produto, index) => {
            return (
                <tr key={produto.id} className={index % 2 === 0 ? 'Par': 'Impar'}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{produto.id}</th>
                    <td className="px-6 py-4">{produto.nome}</td>
                    <td className="px-6 py-4">R$ {produto.preco.toFixed(2).replace('.',',')}</td>
                    <td className="px-6 py-4">{produto.situacao}</td>
                </tr>

            )
        })
    }

    return (
        <div className="TabelaProdutos">
          
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                               id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nome
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Preço
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Situação
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      {getLinhas()}
                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default TabelaProdutos;