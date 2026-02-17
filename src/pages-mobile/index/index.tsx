import "./index.scss";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    // Compte à rebours (13 mars 2026 09h00)
    const date = new Date("2026-03-13T09:00:00");
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // État pour le slider
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = date.getTime() - now.getTime();
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleNavigate = (link: string, state?: string) => {
        navigate(link, { state });
    };

    // Gestion du scroll pour mettre à jour les points (dots)
    const handleScroll = () => {
        if (sliderRef.current) {
            const scrollLeft = sliderRef.current.scrollLeft;
            const width = sliderRef.current.offsetWidth;
            const index = Math.round(scrollLeft / width);
            setActiveIndex(index);
        }
    };

    const carroussel = [
        {
            type: "countdown",
            title: "C’est quand ?",
            // On n'a pas besoin de passer content ici car on utilise les states direct
        },
        {
            type: "text",
            title: "Objectifs de la journée",
            content:
                "Cette journée a pour but de mettre en avant la culture du jeu vidéo au sein de l’IUT de Meaux et de créer un moment d’échange entre étudiants, enseignants et passionnés.",
        },
        {
            type: "text",
            title: "De quoi s’agit-il ?",
            content:
                "La Journée du Jeu Vidéo est un événement organisé par les étudiants du département MMI de l’IUT de Meaux.",
        },
        {
            type: "action",
            title: "Tournois fin de journée",
            content: [
                "En fin de journée, les trois jeux les plus votés seront sélectionnés pour les tournois officiels.",
                "Les inscriptions ouvriront un peu plus tard, lorsque les brackets seront mis en place.",
            ],
            button: "Voter",
        },
    ];

    return (
        <div className="indexMobile">
            <section className="hero">
                <img src="/img/mobileHero.gif" alt="" className="hero-img" />
                <div className="hero-content">
                    <h1>Game Days</h1>
                    <p>La première édition gaming de l’IUT de Meaux</p>
                    <button
                        onClick={() => handleNavigate("/login", "inscription")}
                    >
                        <span>S’inscrire maintenant</span>
                        <span>
                            <img src="/icons/arrow.svg" alt="" />
                        </span>
                    </button>
                </div>
            </section>

            <section className="carroussel-section">
                <div
                    className="slider-container"
                    ref={sliderRef}
                    onScroll={handleScroll}
                >
                    {carroussel.map((item, index) => (
                        <div className="slide-card" key={index}>
                            <h2>{item.title}</h2>

                            {/* CAS 1 : COMPTE A REBOURS */}
                            {item.type === "countdown" && (
                                <div className="grid-countdown">
                                    <div className="timer-box">
                                        <h4>{days}</h4>
                                        <p>jours</p>
                                    </div>
                                    <div className="timer-box">
                                        <h4>{hours}</h4>
                                        <p>heures</p>
                                    </div>
                                    <div className="timer-box">
                                        <h4>{minutes}</h4>
                                        <p>minutes</p>
                                    </div>
                                    <div className="timer-box">
                                        <h4>{seconds}</h4>
                                        <p>secondes</p>
                                    </div>
                                    {/* Lignes décoratives */}
                                    <div className="line-vertical"></div>
                                    <div className="line-horizontal"></div>
                                </div>
                            )}

                            {/* CAS 2 : TEXTE SIMPLE */}
                            {item.type === "text" &&
                                typeof item.content === "string" && (
                                    <div className="text-content">
                                        <p>{item.content}</p>
                                    </div>
                                )}

                            {/* CAS 3 : TEXTE + BOUTON (Tableau de strings) */}
                            {item.type === "action" &&
                                Array.isArray(item.content) && (
                                    <div className="action-content">
                                        {item.content.map((txt, i) => (
                                            <p key={i}>{txt}</p>
                                        ))}
                                        {item.button && (
                                            <button
                                                className="slide-btn"
                                                onClick={() =>
                                                    handleNavigate("/vote")
                                                }
                                            >
                                                {item.button}
                                            </button>
                                        )}
                                    </div>
                                )}
                        </div>
                    ))}
                </div>

                {/* PAGINATION DOTS */}
                <div className="pagination">
                    {carroussel.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === activeIndex ? "active" : ""}`}
                        ></span>
                    ))}
                </div>
            </section>

            <section className="vote">
                {/* ... Le reste de ton code vote reste inchangé ... */}
                <img
                    src="/img/valorant.gif"
                    alt="valorant"
                    className="background"
                />
                <article className="vote-container">
                    <div className="content">
                        {/* ... */}
                        <div className="content-Title">
                            <h2>Vote pour tes jeux favoris !</h2>

                            <p>
                                Choisis les jeux que tu veux voir sur les
                                stands, dans les tournois ou en réalité
                                virtuelle.
                            </p>
                        </div>

                        <div className="content-text">
                            <p>
                                Les participants choisiront les jeux qui seront
                                présents lors de la Journée du Jeu Vidéo.
                            </p>

                            <p>
                                Ton vote permettra de décider des tournois
                                officiels, des jeux multijoueurs canapé et des
                                jeux VR proposés sur place.
                            </p>
                        </div>
                    </div>
                    <button>
                        Voter maintenant
                        <img
                            src="/icons/arrow.svg"
                            alt="arrow Right"
                            className="arrow"
                        />
                    </button>
                </article>
            </section>
        </div>
    );
};

export default Index;
