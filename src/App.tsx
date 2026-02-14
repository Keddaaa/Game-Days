import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

// Pages Desktop
import Index from "./pages/index/index";
import Login from "./pages/login/login";
import Inscription from "./pages/inscription/inscription";

// Pages Mobile
import IndexMobile from "./pages-mobile/index/index";

function AppContent() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login" || location.pathname === "/inscription";
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {!isLoginPage && !isMobile && <Navbar />}
            <Routes>
                {isMobile ? (
                    <>
                        <Route path="/" element={<IndexMobile />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Index />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/inscription" element={<Inscription />} />
                    </>
                )}
            </Routes>
            {!isLoginPage && <Footer />}
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
