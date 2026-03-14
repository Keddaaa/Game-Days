import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Vote from "./pages/votes/vote.tsx";
import Vote1 from "./pages/votes/vote1.tsx";
import Vote3 from "./pages/votes/vote3.tsx";
import Vote4 from "./pages/votes/vote4.tsx";
import Vote5 from "./pages/votes/vote5.tsx";
import Vote7 from "./pages/votes/vote7.tsx";
import Vote8 from "./pages/votes/vote8.tsx";

// Pages Desktop
import Index from "./pages/index/index";
import Login from "./pages/login/login";
import Inscription from "./pages/inscription/inscription";

// Pages Mobile
import IndexMobile from "./pages-mobile/index/index";
import { LoginMobile } from "./pages-mobile/LoginMobile/LoginMobile";

function App() {
	const location = useLocation();
	const isLoginPage =
		location.pathname === "/login" || location.pathname === "/inscription";
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
			{!isLoginPage && !isMobile && <Navbar />}
			<Routes>
				{isMobile ? (
					<>
						<Route path="/" element={<IndexMobile />} />
						<Route path="/login" element={<LoginMobile />} />
						<Route path="*" element={<IndexMobile />} />
					</>
				) : (
					<>
						<Route path="/" element={<Index />} />
						<Route path="/login" element={<Login />} />
						<Route path="/inscription" element={<Inscription />} />
						<Route path="*" element={<Index />} />
						<Route path="/vote" element={<Vote />} />
						<Route path="/vote1" element={<Vote1 />} />
						<Route path="/vote3" element={<Vote3 />} />
						<Route path="/vote4" element={<Vote4 />} />
						<Route path="/vote5" element={<Vote5 />} />
						<Route path="/vote7" element={<Vote7 />} />
						<Route path="/vote8" element={<Vote8 />} />
					</>
				)}
			</Routes>
			{!isLoginPage && <Footer />}
		</>
	);
}

export default App;
