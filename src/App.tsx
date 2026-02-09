import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

// Pages
import Index from "./pages/index/index";
import Evenement from "./pages/evenement/evenement";
import Vote from "./pages/vote/vote";
import Contact from "./pages/contact/contact";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/evenement" element={<Evenement />} />
				<Route path="/vote" element={<Vote />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
