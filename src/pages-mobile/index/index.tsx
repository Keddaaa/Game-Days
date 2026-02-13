import "./index.scss";
import { useEffect, useState } from "react";

const Index = () => {
    // compte a rebours a partir d'une date precise
    // 23 mars 2026 16h
    const date = new Date("2026-03-23T16:00:00");
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
        </div>
    );
};

export default Index;
