import { useEffect, useState } from "react";
import { Character } from "../../types/character";
import Card from "../Card";
import axios from "axios";

export default function SectionCards() {

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(result => {
                setChars(result.data.results);
            });
    });

    const [chars, setChars] = useState<Character[]>([]);

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
                    {
                        chars.map(item => <Card key={item.id} char={item} />)
                    }
                </div>
            </div>
        </section>
    );
}
