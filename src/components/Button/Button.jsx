import "./Button.css";

function Button({titulo, mensagem}) {

  function btnCLicar(mensagem) {
    alert(mensagem)
  }
  return <button className="botao" 
  // onClick={()=> {console.log('Cliquei no botão')}}>{titulo}
  onClick={()=> btnCLicar(mensagem)}>
    {titulo}
  </button>;
}

export default Button;
