import { Character } from "../../types/character";

type Props = {
    char: Character;
}

export default function Card({ char }: Props) {

    return (
        <div className="card-char">
            <div className="card-char-top">
                <img src={char.image} alt={char.name} />
            </div>
            <div className="card-char-bottom">
                <h3 className="card-char-title">{char.name}</h3>
                <div className="card-char-status-container color-text-dark">
                    <span className="card-char-status color-bg-dead"></span>
                    <p>{char.status}</p>
                </div>
                <div className="card-char-attribute">
                    <h4>Origem</h4>
                    <p>{char.origin.name}</p>
                </div>
            </div>
        </div>
    );
}