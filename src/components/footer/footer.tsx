import "./footer.scss";

const Footer = () => {
    const socialLinks = [
        "/reseaux/image33.png",
        "/reseaux/image34.png",
        "/reseaux/image36.png",
    ];

    return (
        <footer>
            <div className="footerTop">
                <img src="/img/footer.gif" alt="" />
                <div className="textContainer">
                    <div className="text">
                        <h2>
                            Inscris-toi à la <br /> Journée du Jeu <br /> Vidéo
                            !
                        </h2>
                        <p className="firstText">
                            Participe à la première édition de l’événement
                            gaming de l’IUT de Meaux.
                        </p>
                        <p className="secondText">
                            Que tu sois joueur, visiteur ou bénévole, cette
                            journée est ouverte à tous. Remplis simplement le
                            formulaire ci-dessous pour réserver ta place ou
                            t’inscrire à un tournoi.
                        </p>
                    </div>
                    <div className="buttonContainer">
                        <button>S’inscrire maintenant</button>
                        <button>
                            <img src="/icons/arrowRight.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="footerMiddle" id="contact">
                <div className="contact">
                    <h3>Nous Contacter !</h3>
                    <div className="inputContainer">
                        <input type="text" placeholder="adress@gmail.com" />
                        <button>
                            <img src="/icons/send.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1272.680446563219!2d2.8771362532639118!3d48.95452089455911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8a11cceb9ee4f%3A0x143615de96b042c5!2sIUT%20De%20Meaux%20Universit%C3%A9%20Gustave%20Eiffel!5e0!3m2!1sfr!2sfr!4v1770759081412!5m2!1sfr!2sfr"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="footerBottom">
                <div className="socialLinks">
                    <p>Psst...Ici aussi</p>
                    <img
                        src="/icons/arrowBoucle.svg"
                        alt=""
                        className="arrowBoucle"
                    />
                    <div className="socialLinksContainer">
                        {socialLinks.map((link, index) => (
                            <img key={index} src={link} alt="" />
                        ))}
                    </div>
                </div>
                <p className="copyright">
                    © 2025 Journée du Jeu Vidéo — IUT de Meaux
                    <br />
                    Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
