import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./vote1.scss";
import { useVote } from "../../context/VoteContext";
import { authService } from "../../../src/services/authService";

const finsondageMobile = () => {
    const navigate = useNavigate();
    const { frequence, plateforme, typeJeu, participation, experienceTournoi } = useVote();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            await authService.saveSondage({
                plateforme,
                frequence_jeu: frequence,
                type_de_jeu_prefere: typeJeu,
                participation,
                participation_anterieure: experienceTournoi,
            });
        } catch (error) {
            console.error("Erreur lors de l'envoi du sondage:", error);
        }
        setIsSubmitting(false);
        navigate("/premiervote");
    };

    return (
        <div className="vote-page-mobile">
            <button className="back-button" onClick={() => navigate("/troisiemesondage")}>
                <span className="back-arrow">←</span>
                <span>Retour</span>
            </button>

            <main className="content">
                <h1>Merci pour tes réponses !</h1>

                <p>
                    Merci d'avoir pris le temps de partager ton avis.
                    Maintenant, place à la partie la plus attendue...
                </p>

                <button
                    className="next-button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Envoi en cours..." : "Voter maintenant"}
                    <img
                        src="/icons/arrowRight.svg"
                        alt=""
                        style={{ marginLeft: "10px", width: "20px" }}
                    />
                </button>
            </main>
        </div>
    );
};

export default finsondageMobile;
