import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./vote1.scss";

const Vote8 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="vote-page">
            <main className="content">
                <h1>Merci pour tes réponses !</h1>

                <div className="vote-success">
                    Ton vote a bien été pris en compte
                </div>

                <button
                    className="next-button"
                    onClick={() => navigate("/")}
                    style={{ marginTop: "20px" }}
                >
                    Retour
                </button>
            </main>
        </div>
    );
};

export default Vote8;
