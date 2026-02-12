import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

// Pages
import Index from "./pages/index/index";
import Evenement from "./pages/evenement/evenement";
import Vote from "./pages/vote/vote";
import Contact from "./pages/contact/contact";
import Login from "./pages/login/login";

function AppContent() {
	const location = useLocation();
	const isLoginPage = location.pathname === "/login";

	return (
		<>
			{!isLoginPage && <Navbar />}
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/evenement" element={<Evenement />} />
				<Route path="/vote" element={<Vote />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
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
