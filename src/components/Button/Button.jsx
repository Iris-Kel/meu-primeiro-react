import "./Button.css";

function Button({titulo, mensagem, desabilitado}) {
  function btnCLicar(mensagem) {
    alert(mensagem);
  }
  return (
    <button
      className={`${'botao'} ${desabilitado ? 'botao-desabilitado' : ''}`}
      disabled={desabilitado}
      // onClick={()=> {console.log('Cliquei no botão')}}>{titulo}
      onClick={() => btnCLicar(mensagem)}
    >
      {titulo} - {desabilitado} - {typeof desabilitado}
    </button>
  );
}

export default Button;
