import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import "./App.css"

function App() {
  let nome = "Douglas";
  let email = "DouglasBianco@gmail.com";

  let alunos = ["Cesar", "Patrícia", "Fernandes", "Breu", "Amora"];

  let contatos = [
    { nome: "Eloá", idade: 17 },
    { nome: "Izadora", idade: 18 },
    { nome: "Livia", idade: 16 }
  ];

  return (
    <div>
      <h1
        style={{
          backgroundColor: "purple",
          padding: "20px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Meu primeiro programa usando React
      </h1>
      <h2 style={{ fontSize: "30px", color: "purple" }}>Hello World!</h2>
      <p>
        Usuário Logado: {nome} - Email: {email}
      </p>

      <h3>Lista de Alunos</h3>
      <div>
        <p>
          {alunos.map((aluno) => (
            <p>{aluno} </p>
          ))}
        </p>
      </div>

      <h3>Lista de Contatos</h3>
      <div>
        {contatos.map((contato) => (
          <div>
            <p>
              nome: {contato.nome} - Idade: {contato.idade}
            </p>
          </div>
        ))}
      </div>
      <Button titulo="Entrar" mensagem="Entrando no aplicativo"/>
      <Button titulo="Sair" mensagem="Saindo do aplicativo"/>
      <Button titulo="Limpar" mensagem="Limpando os campos"/>
      <div className="cards">
          <Card titulo="Dinossauros" descricao="Rawr"/>
          <Card titulo="Centopeias" descricao="Não sei"/>
          <Card titulo="Sim" descricao="Não"/>
      </div>
    </div>
  );
}

export default App;
