import "./index.scss";
import { useEffect, useState } from "react";

const Index = () => {
    // compte a rebours a partir d'une date precise
    // 13 mars 2026 16h
    const date = new Date("2026-03-13T09:00:00");
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // chaque seconde le compte a rebours diminue
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
                            <h4>{days}</h4>
                            <p>jours</p>
                        </div>
                        <div className="card">
                            <h4>{hours}</h4>
                            <p>heures</p>
                        </div>
                        <div className="card">
                            <h4>{minutes}</h4>
                            <p>minutes</p>
                        </div>
                        <div className="card">
                            <h4>{seconds}</h4>
                            <p>secondes</p>
                        </div>
                        <hr className="hr1" />
                        <hr className="hr2" />
                    </div>
                </div>
            </section>
            <section className="vote">
                <img
                    src="./img/valorant.gif"
                    alt="valorant"
                    className="background"
                />
                <article className="vote-container">
                    <div className="content">
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
                            src="./icons/arrow.svg"
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
