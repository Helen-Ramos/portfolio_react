import React from "react"
import * as S from './Style.jsx'

function Sobre() {
    return (
        <S.MainSobre>
        <S.SectionDoSobre>
          <h2>ESTUDOS</h2>
          <S.Card>
            <S.DivCard>
              <h2>Desenvolvimento front-end</h2>
              <h3>Set/2021 - Mai/2022</h3>
              <img src={Vnw} alt="Logo do vnw" />
              <h2>Belas Artes</h2>
            </S.DivCard>
          </S.Card>
        </S.SectionDoSobre>
        </S.MainSobre>
    )
}

export default Sobre

