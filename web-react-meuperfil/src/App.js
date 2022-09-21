import './App.css';

import Foto from './components/Foto'
import Secao from './components/Secao'
import Dado from './components/Dado'

function App() {
  return (
    <div className="App">
      <Foto img_src="https://avatars.githubusercontent.com/u/91236653?v=4"></Foto>
      <Secao titulo="Dados pessoais:">
        <Dado chave="Nome" valor="Maria Eduarda B. Silva"></Dado>
        <Dado chave="RA" valor="G270371"></Dado>
        <Dado chave="Github" tipo="link" valor="https://github.com/BHOWXY"></Dado>
        <Dado chave="Linkedin" tipo="link" valor="https://www.linkedin.com/in/mar1as1lva/"></Dado>
      </Secao>
      <Secao titulo="Formação:">
        <Dado chave="Escolaridade" valor="Ensino médio"></Dado>
        <Dado chave="Tecnólogo" valor="Análise e Desenvolvimento de Sistemas (Em andamento)"></Dado>
      </Secao>
      <Secao titulo="Experiência:">
        <Dado chave="Informática" valor="Pacote Office"></Dado>
      </Secao>
      <Secao titulo="Projetos:">
        <Dado chave="Banco" valor="Back-end"></Dado>
        <Dado chave="Jogo" valor="Back-end"></Dado>
      </Secao>
    </div>
  );
}

export default App;
