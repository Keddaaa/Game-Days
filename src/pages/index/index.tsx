import "./index.scss";

const Index = () => {
    const defilement = [
        "MMI Game Days",
        "Le 17/03/2026",
        "A meaux",
        "Ready to play?",
        "#GameDays",
    ];
    const imgListCaroussel = [
        [
            "./img/jeux/deluxe.png",
            "./img/jeux/2K.png",
            "./img/jeux/storm.png",
            "./img/jeux/fighterZ.png",
        ],
        [
            "./img/jeux/party.png",
            "./img/jeux/brawlhalla.png",
            "./img/jeux/fc.png",
            "./img/jeux/saber.png",
        ],
    ];
    return (
        <div className="index">
            <section className="hero">
                <img
                    src="../../img/valorant.gif"
                    alt="Fond d'écran Valorant"
                    className="backgroundIMG"
                />
                <div className="hero-content">
                    <h1>GAME DAY</h1>
                    <p>La première édition gaming de l’IUT de Meaux</p>
                </div>
                <button className="voirplus">
                    <span>
                        <img src="./icons/arrow.svg" alt="Voir plus" />
                    </span>
                </button>
            </section>
            <section className="presentation">
                {/* chaque item avec • entre eux */}
                <div className="defilement">
                    <div className="defilement-content">
                        {defilement.map((item, index) => (
                            <>
                                <p key={index}>{item} </p>
                                <p>•</p>
                            </>
                        ))}
                    </div>
                    <div className="defilement-content" aria-hidden>
                        {defilement.map((item, index) => (
                            <>
                                <p key={index}>{item} </p>
                                <p>•</p>
                            </>
                        ))}
                    </div>
                    <div className="defilement-content" aria-hidden>
                        {defilement.map((item, index) => (
                            <>
                                <p key={index}>{item} </p>
                                <p>•</p>
                            </>
                        ))}
                    </div>
                </div>
                <div className="presentation-content">
                    <p className="text1">
                        Une journée dédiée au gaming, <br /> à la découverte et
                        à la <br /> compétition ! <br /> Tournois, stands, jeux
                        en libre <br /> accès et bonne ambiance au <br />
                        programme.
                        <div className="meaux">
                            <span>Meaux</span>
                        </div>
                        <div className="decouverte">
                            <span>Découverte</span>
                        </div>
                        <div className="cashprize">
                            <span>Cash prize</span>
                        </div>
                        <div className="tournois">
                            <span>Tournois ?</span>
                        </div>
                        <div className="gamedays">
                            <span>Game Days</span>
                        </div>
                    </p>
                    <p className="text2">
                        “Trouve ton équipe, ton style, ton jeu.”
                    </p>
                </div>
            </section>
            <section className="carroussel">
                <article>
                    <div>
                        <h2>De quoi s’agit-il ?</h2>
                        <p>
                            La Journée du Jeu Vidéo est un événement organisé
                            par les étudiants du département MMI de l’IUT de
                            Meaux.
                            <br />
                            <br />
                            L’objectif est simple : rassembler autour d’une même
                            passion le jeu vidéo et faire découvrir son univers
                            sous toutes ses formes.
                            <br />
                            <br />
                            Au programme : des tournois, des zones de jeu libre,
                            des démonstrations, et une ambiance conviviale où
                            chaque participant, qu’il soit joueur ou spectateur,
                            trouve sa place.
                            <br />
                            <br /> C’est une journée d’échanges, de compétition
                            et de plaisir, pensée pour partager la culture du
                            jeu vidéo et créer un moment fort au sein de la vie
                            étudiante.
                        </p>
                        <div className="buttons">
                            <button>
                                <img src="./icons/arrow.svg" alt="" />
                            </button>
                            <button className="active">
                                <img src="./icons/arrow.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <img src="./img/dequoi.png" alt="" />
                </article>
            </section>
            <section className="jeux">
                <div className="info">
                    <div className="title">
                        <h2>
                            Vote pour tes <br /> jeux favoris !
                        </h2>
                        <p>
                            Choisis les jeux que tu veux voir sur les <br />
                            stands, dans les tournois ou en réalité virtuelle.
                        </p>
                    </div>
                    <p>
                        Les participants choisiront les <br /> jeux qui seront
                        présents lors de <br /> la Journée du Jeu Vidéo.
                        <br />
                        <br />
                        Ton vote permettra de décider <br /> des tournois
                        officiels, des jeux <br /> multijoueurs canapé et des
                        jeux <br /> VR proposés sur place.
                    </p>
                    <button className="voir">
                        <span>Voter maintenant</span>
                        <img src="./icons/arrowRight.svg" alt="" />
                    </button>
                </div>

                <div className="doubleCaroussel">
                    {imgListCaroussel.map((colonne, colIndex) => (
                        <article
                            className="caroussel"
                            key={`col-${colIndex}`}
                            aria-hidden={colIndex === 1 ? true : undefined}
                        >
                            <div className={`scroll scroll${colIndex + 1}`}>
                                {colonne.map((src, imgIndex) => (
                                    <img
                                        key={`img-${colIndex}-${imgIndex}`}
                                        src={src}
                                        alt="Jeu"
                                    />
                                ))}
                            </div>
                            <div
                                className={`scroll scroll${colIndex + 1}`}
                                aria-hidden
                            >
                                {colonne.map((src, imgIndex) => (
                                    <img
                                        key={`img-hidden-${colIndex}-${imgIndex}`}
                                        src={src}
                                        alt=""
                                    />
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Index;
