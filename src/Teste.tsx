import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
    </>
  )
}

export default Teste
