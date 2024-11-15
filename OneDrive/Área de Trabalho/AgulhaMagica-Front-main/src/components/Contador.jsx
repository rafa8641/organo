import React, { useState } from "react";

import styles from '@/styles/Contador.module.css';

// Eu gosto de contadores de carreiras para contar as minhas carreiras no crochê
export const Contador = () => {

    const [contador, setContador] = useState(0);

    const contarNum = () => {
        setContador(contador + 1);
    };

    const descontarNum = () => {
        setContador(contador - 1); 
    };


    return (

        <div> 
            <h1>Contador de Carreiras</h1>

            <div className="imagem">
                
            </div>

            <div className='counter'>
                <button className='adicionar' onClick={contarNum}>+</button>
                <h1 id="Numero">:{contador}</h1>
                <button className='remover' onClick={descontarNum}>-</button>
            </div>
        </div>
    );

};