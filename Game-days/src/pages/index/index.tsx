import "./index.scss";

const Index = () => {
	return (
		<section className="index">
			<div className="hero">
				<img src="../../img/valorant.gif" alt="Fond d'écran Valorant" />
				<div className="hero-content">
					<h1>MMI Game Days</h1>
					<p>La première édition gaming de l’IUT de Meaux</p>
					<button className="voirplus">
						<img src="../../icons/arrow.svg" alt="Voir plus" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Index;
