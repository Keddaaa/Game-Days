import "./index.scss";

const Index = () => {
    return (
        <div className="indexMobile">
            <section className="hero">
                <img src="./img/mobileHero.gif" alt="" className="hero-img" />
                <div className="hero-content">
                    <h1>Game Days</h1>
                    <p>La première édition gaming de l’IUT de Meaux</p>
                    <button>
                        <span>S’inscrire maintenant</span>
                        <span>
                            <img src="./icons/arrow.svg" alt="" />
                        </span>
                    </button>
                </div>
            </section>
            <section className="carroussel">
                <div className="carroussel-content">
                    <h2>C’est quand ?</h2>
                    <div className="grid">
                        <div className="card">
                            <h4>37</h4>
                            <p>jours</p>
                        </div>
                        <div className="card">
                            <h4>18</h4>
                            <p>heures</p>
                        </div>
                        <div className="card">
                            <h4>16</h4>
                            <p>minutes</p>
                        </div>
                        <div className="card">
                            <h4>23</h4>
                            <p>secondes</p>
                        </div>
                        <hr className="line" />
                        <hr className="line" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
