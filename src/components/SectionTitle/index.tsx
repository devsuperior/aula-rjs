export default function SectionTitle() {

    return (
        <section className="full-width-container title-section flex-vertical-center">
            <div className="title-section-bg"></div>
            <div className="container z10">
                <div className="section-text-container">
                    <h2 className="section-title color-text-main">DSRick</h2>
                    <div className="section-subtitle color-text-light mb10">
                        Seu primeiro projeto ReactJS
                    </div>
                    <p className="section-description">
                        Este é um projeto educativo do prof. Nelio Alves da Devsuperior,
                        desenvolvido para mostrar como qualquer pessoa pode aprender
                        desenvolvimento front end com ReactJS.
                    </p>
                </div>
            </div>
        </section>
    );
}