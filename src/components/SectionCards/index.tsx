import { Character } from "../../types/character";
import Card from "../Card";

export default function SectionCards() {

    const chars : Character[] = [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
            "id": 2,
            "name": "Morty Smith",
            "status": "Alive",
            "origin": {
                "name": "unknown",
                "url": ""
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        }
    ];


    return (
        <section className="full-width-container normal-section color-bg-primary">
            <div className="container">
                <div className="section-text-container mb60">
                    <h2 className="section-title color-text-main">Personagens</h2>
                    <div className="section-subtitle color-text-dark">
                        Veja seu personagem favorito
                    </div>
                </div>
                <div className="cards-container">
                    <Card char={chars[0]} />
                    <Card char={chars[1]} />
                </div>
            </div>
        </section>
    );
}
