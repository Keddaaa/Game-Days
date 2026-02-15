import "./LoginMobile.scss";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const LoginMobile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;

    // const for inscription
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [identifiant, setIdentifiant] = useState("");
    const [formation, setFormation] = useState("");
    const [mdp, setMdp] = useState("");
    const [mdpConfirm, setMdpConfirm] = useState("");
    const [page, setPage] = useState(1);
    return (
        <div className="login-mobile">
            <div className="loginContainer">
                {/* <div className="login-mobile-container-header">
                    <h1>{state}</h1>
                </div> */}
                <div className="entete">
                    <button className="back" onClick={() => navigate(-1)}>
                        <img src="/icons/arrow.svg" alt="arrow left" />
                        Retour
                    </button>
                    <img
                        src="./img/mobile/connexion.png"
                        alt="connexion"
                        className="Bg"
                    />
                </div>

                <div className="form">
                    <div className="form-container">
                        <div
                            className={
                                state === "inscription"
                                    ? "form-container-header"
                                    : "form-container-header-center"
                            }
                        >
                            <h1>
                                {state === "inscription"
                                    ? "S'inscrire"
                                    : "Se connecter"}
                            </h1>
                        </div>
                        {state === "inscription" ? (
                            <div className="form-container-body">
                                <div
                                    className="page"
                                    style={{
                                        display: page === 1 ? "flex" : "none",
                                    }}
                                >
                                    <input
                                        type="text"
                                        placeholder="Nom/Prénom"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Identifiant"
                                    />
                                    <select name="formation" id="formation">
                                        <option value="_">Formation</option>
                                        <option value="MMI">MMI</option>
                                        <option value="GEA">GEA</option>
                                        <option value="TC">TC</option>
                                    </select>
                                </div>
                                <div
                                    className="page"
                                    style={{
                                        display: page === 2 ? "flex" : "none",
                                    }}
                                >
                                    <input
                                        type="text"
                                        placeholder="Mot de pase"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Confirmer le mot de pase"
                                    />
                                </div>
                                <button
                                    onClick={() => {
                                        if (page === 1) {
                                            setPage(2);
                                        } else {
                                        }
                                    }}
                                >
                                    {page === 1 ? "Continuer" : "S'inscrire"}
                                </button>
                                <p>
                                    Déjà inscrit ?
                                    <Link to="/login" state={"connexion"}>
                                        Se connecter
                                    </Link>
                                </p>
                                <p>
                                    © 2025 Journée du Jeu Vidéo — IUT de Meaux
                                    Tous droits réservés.
                                </p>
                            </div>
                        ) : (
                            <div className="form-container-body">
                                <div className="page">
                                    <input
                                        type="text"
                                        placeholder="Identifiant"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Mot de pase"
                                    />
                                </div>
                                <button>Se connecter</button>
                                <p>
                                    Pas encore inscrit ?{" "}
                                    <Link to="/login" state={"inscription"}>
                                        S'inscrire
                                    </Link>
                                </p>
                                <p>
                                    © 2025 Journée du Jeu Vidéo — IUT de Meaux
                                    Tous droits réservés.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
