import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Vote from "./pages/votes/vote.tsx";
import Vote1 from "./pages/votes/premiersondage.tsx";
import Vote3 from "./pages/votes/secondsondage.tsx";
import Vote4 from "./pages/votes/troisiemesondage.tsx";
import Vote5 from "./pages/votes/finsondage.tsx";
import Vote6 from "./pages/votes/premiervote.tsx";
import Vote7 from "./pages/votes/secondvote.tsx";
import Vote8 from "./pages/votes/finvote.tsx";

// Pages Desktop
import Index from "./pages/index/index";
import Login from "./pages/login/login";
import Inscription from "./pages/inscription/inscription";
import Galerie from "./pages/galerie/galerie";

// Pages Mobile
import IndexMobile from "./pages-mobile/index/index";
import { LoginMobile } from "./pages-mobile/LoginMobile/LoginMobile";
import GalerieMobile from "./pages-mobile/galerie/galerie";
import VoteMobile from "./pages-mobile/votes/vote";
import PremiersondageMobile from "./pages-mobile/votes/premiersondage";
import SecondsondageMobile from "./pages-mobile/votes/secondsondage";
import TroisiemesondageMobile from "./pages-mobile/votes/troisiemesondage";
import FinsondageMobile from "./pages-mobile/votes/finsondage";
import PremiervoteMobile from "./pages-mobile/votes/premiervote";
import SecondvoteMobile from "./pages-mobile/votes/secondvote";
import FinvoteMobile from "./pages-mobile/votes/finvote";

function App() {
    const location = useLocation();
    const isLoginPage =
        location.pathname === "/login" || location.pathname === "/inscription";
    const isVotePage = ["/vote", "/premiersondage", "/secondsondage", "/troisiemesondage", "/finsondage", "/premiervote", "/secondvote", "/finvote"].includes(location.pathname);
    const isGaleriePage = location.pathname === "/galerie";
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile au chargement comme au
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {!isLoginPage && !isVotePage && !isGaleriePage && !isMobile && <Navbar />}
            <Routes>
                {isMobile ? (
                    <>
                        <Route path="/" element={<IndexMobile />} />
                        <Route path="/login" element={<LoginMobile />} />
                        <Route path="/vote" element={<VoteMobile />} />
                        <Route
                            path="/premiersondage"
                            element={<PremiersondageMobile />}
                        />
                        <Route
                            path="/secondsondage"
                            element={<SecondsondageMobile />}
                        />
                        <Route
                            path="/troisiemesondage"
                            element={<TroisiemesondageMobile />}
                        />
                        <Route
                            path="/finsondage"
                            element={<FinsondageMobile />}
                        />
                        <Route
                            path="/premiervote"
                            element={<PremiervoteMobile />}
                        />
                        <Route
                            path="/secondvote"
                            element={<SecondvoteMobile />}
                        />
                        <Route path="/finvote" element={<FinvoteMobile />} />
                        <Route path="/galerie" element={<GalerieMobile />} />
                        <Route path="*" element={<IndexMobile />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Index />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/inscription" element={<Inscription />} />
                        <Route path="/galerie" element={<Galerie />} />
                        <Route path="*" element={<Index />} />
                        <Route path="/vote" element={<Vote />} />
                        <Route path="/premiersondage" element={<Vote1 />} />
                        <Route path="/secondsondage" element={<Vote3 />} />
                        <Route path="/troisiemesondage" element={<Vote4 />} />
                        <Route path="/finsondage" element={<Vote5 />} />
                        <Route path="/premiervote" element={<Vote6 />} />
                        <Route path="/secondvote" element={<Vote7 />} />
                        <Route path="/finvote" element={<Vote8 />} />
                    </>
                )}
            </Routes>
            {!isLoginPage && !isVotePage && !isGaleriePage && <Footer />}
        </>
    );
}

export default App;
