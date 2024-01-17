import './App.css'
import React from 'react';

import Mega from './components/mega/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';



const App = () => 
     (
       <div className="App"> 
          <h1>Fundamentos React</h1>
          <div className="Cards">

          <Card title="#13 Mega" color="#B9006E">
               <Mega qtde={6}/>
            </Card>

          <Card title="#12 Contador" color="#424242">
               <Contador numeroInicial={10} passoInicial={5} />
            </Card>

            <Card title="#11 Componente Controlado (Input)" color="#E45F56">
               <Input />
            </Card>

            <Card title="#10 Comunicação Indireta" color="#8BAD39">
               <IndiretaPai />
            </Card>

            <Card title="#09 Comunicação Direta" color="#59323C">
               <DiretaPai />
            </Card>

            <Card title="#08 Renderização condicional" color="#982395">
               <ParOuImpar numero={21} />
               <UsuarioInfo />
               <UsuarioInfo usuario={{nome: 'Marcelino'}}/>
               <UsuarioInfo usuario={{email: 'marcelino.feliciano@hotmail.com'}}/>
            </Card>

            <Card title="#07 Tabela Produtos" color="#3A9AD9">
               <TabelaProdutos />
            </Card>

            <Card title="#06 Lista Alunos" color="#FF4C65">
               <ListaAlunos />
            </Card>

            <Card title="#05 Componentes com filhos" color="#00C8F8">
              <Familia sobrenome="Silva Feliciano">
                 <FamiliaMembro nome="Pedro" />
                 <FamiliaMembro nome="Analu"/>
                 <FamiliaMembro nome="Ana Paula"/>
              </Familia>
            </Card>

            <Card title="#04 Desafio Aleatório" color="#FA6900">
              <Aleatorio min={1} max={60}/>
            </Card>

            <Card title="#03 Fragmento" color="#E94C6F">
              <Fragmento />
            </Card>

            <Card title="#02 Com Parâmetro" color="#E8B71A">
                <ComParametro 
                    title="Situação do Aluno"
                    aluno="Pedro"
                    nota={7.8}
                />
            </Card>

            <Card title="#01 Primeiro Componente" color="#588C73">
              <Primeiro/>
            </Card>
        </div>
      </div>
    )

export default App;