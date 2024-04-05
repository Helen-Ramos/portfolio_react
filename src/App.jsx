import React from "react"
import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {

  return (
    <>
    <h1>Oi</h1>
    <GlobalStyle/>
    </>
  )
}

export default App
