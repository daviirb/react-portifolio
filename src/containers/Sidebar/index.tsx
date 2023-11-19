import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Davi Ribeiro</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        daviirb
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        Desenvolvedor Front-end
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
