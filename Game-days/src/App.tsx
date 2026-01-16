import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

// Pages
import Index from "./pages/index/index";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Index />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
