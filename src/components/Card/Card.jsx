import Button from "../Button/Button";
import "./Card.css";

function Card({titulo, descricao}) {
    return (
        <div className="card">
            <h2 className="titulo">{titulo}</h2>
            <p>{descricao}</p>
            <Button titulo="Clique aqui"/>
        </div>
    )
}

export default Card