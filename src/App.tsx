import { ThemeProvider } from 'styled-components'

import Projetos from './components/Projetos'
import Sobre from './components/Sobre'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [usandoTemaDark, setUsandotemaDark] = useState(false)

  function trocaTema() {
    setUsandotemaDark(!usandoTemaDark)
  }
  return (
    <ThemeProvider theme={usandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
