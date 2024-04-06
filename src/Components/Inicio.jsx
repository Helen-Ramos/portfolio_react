import React from 'react'
import Perfil from './Imagens/helen.jpg'

import * as S from './Style.jsx'

function Inicio() {
    return (
        <S.ContainerInicio>
            <S.Perfil src={Perfil} alt="" />

            <div>
                <h2>Olá, me chamo Helen</h2>
                <h2>Moro em Petrópolis - RJ. Estou buscando conhecimento na área de tecnologia e gostando muito. Comecei um pouco tarde, mas inspirada nas diversas histórias de transição de carreira dos 40+. </h2>
            </div>
        </S.ContainerInicio>
    )
}

export default Inicio
