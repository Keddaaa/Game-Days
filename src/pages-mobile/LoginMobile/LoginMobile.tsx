import "./LoginMobile.scss";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";

export const LoginMobile = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const mode = searchParams.get("mode") || "connexion";

    const [nom, setNom] = useState("");
    const [identifiant, setIdentifiant] = useState("");
    const [formation, setFormation] = useState("");
    const [mdp, setMdp] = useState("");
    const [mdpConfirm, setMdpConfirm] = useState("");
    const [page, setPage] = useState(1);
    const [error, setError] = useState("");

    const handleRegister = async () => {
        setError("");

        if (mdp !== mdpConfirm) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            const data = await authService.register({
                nom_prenom: nom,
                identifiant,
                formation,
                mot_de_passe: mdp,
            });

            if (data.success) {
                navigate("/login?mode=connexion");
            } else {
                setError(data.error || "Erreur lors de l'inscription");
            }
        } catch {
            setError("Erreur serveur");
        }
    };

    const handleLogin = async () => {
        setError("");

        try {
            const data = await authService.login({
                identifiant,
                mot_de_passe: mdp,
            });

            if (data.success) {
                localStorage.setItem("user", JSON.stringify(data.user));
                navigate("/");
            } else {
                setError(data.error || "Erreur de connexion");
            }
        } catch {
            setError("Erreur serveur");
        }
    };

    return (
        <div className="login-mobile">
            <div className="loginContainer">
                <div className="entete">
                    <button className="back" onClick={() => navigate(-1)}>
                        <img src="/icons/arrow.svg" alt="arrow left" />
                        Retour
                    </button>

                    <img
                        src={
                            mode === "inscription"
                                ? "/img/mobile/inscription.png"
                                : "/img/mobile/connexion.png"
                        }
                        alt="connexion"
                        className="Bg"
                    />
                </div>

                <div className="form">
                    <div className="form-container">
                        <div
                            className={
                                mode === "inscription"
                                    ? "form-container-header"
                                    : "form-container-header-center"
                            }
                        >
                            <h1>
                                {mode === "inscription"
                                    ? "S'inscrire"
                                    : "Se connecter"}
                            </h1>
                        </div>

                        {mode === "inscription" ? (
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
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Identifiant"
                                        value={identifiant}
                                        onChange={(e) =>
                                            setIdentifiant(e.target.value)
                                        }
                                    />
                                    <select
                                        name="formation"
                                        id="formation"
                                        value={formation}
                                        onChange={(e) =>
                                            setFormation(e.target.value)
                                        }
                                    >
                                        <option value="">Formation</option>
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
                                        type="password"
                                        placeholder="Mot de passe"
                                        value={mdp}
                                        onChange={(e) => setMdp(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Confirmer le mot de passe"
                                        value={mdpConfirm}
                                        onChange={(e) =>
                                            setMdpConfirm(e.target.value)
                                        }
                                    />
                                </div>

                                {error && (
                                    <p className="error-message">{error}</p>
                                )}

                                <button
                                    onClick={() => {
                                        if (page === 1) {
                                            setPage(2);
                                        } else {
                                            handleRegister();
                                        }
                                    }}
                                >
                                    {page === 1 ? "Continuer" : "S'inscrire"}
                                </button>

                                <p>
                                    Déjà inscrit ?{" "}
                                    <Link to="/login?mode=connexion">
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
                                        value={identifiant}
                                        onChange={(e) =>
                                            setIdentifiant(e.target.value)
                                        }
                                    />
                                    <input
                                        type="password"
                                        placeholder="Mot de passe"
                                        value={mdp}
                                        onChange={(e) => setMdp(e.target.value)}
                                    />
                                </div>

                                {error && (
                                    <p className="error-message">{error}</p>
                                )}

                                <button onClick={handleLogin}>
                                    Se connecter
                                </button>

                                <p>
                                    Pas encore inscrit ?{" "}
                                    <Link
                                        to="/login?mode=inscription"
                                        // state="inscription"
                                    >
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
