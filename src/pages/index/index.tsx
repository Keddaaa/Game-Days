import { useState } from "react";
import "./index.scss";

const Index = () => {
	const slides = [
		{
			title: "De quoi s’agit-il ?",
			content: (
				<>
					La Journée du Jeu Vidéo est un événement organisé par les
					étudiants du département MMI de l’IUT de Meaux.
					<br />
					<br />
					L’objectif est simple : rassembler autour d’une même passion
					le jeu vidéo et faire découvrir son univers sous toutes ses
					formes.
					<br />
					<br />
					Au programme : des tournois, des zones de jeu libre, des
					démonstrations, et une ambiance conviviale où chaque
					participant, qu’il soit joueur ou spectateur, trouve sa
					place.
					<br />
					<br />
					C’est une journée d’échanges, de compétition et de plaisir,
					pensée pour partager la culture du jeu vidéo et créer un
					moment fort au sein de la vie étudiante.
				</>
			),
			image: "/img/dequoi.png",
		},
		{
			title: "Objectifs de la journée",
			content: (
				<>
					Cette journée a pour but de mettre en avant la culture du
					jeu vidéo au sein de l’IUT de Meaux et de créer un moment
					d’échange entre étudiants, enseignants et passionnés.
					<br />
					<br />
					Plus précisément, l’événement vise à :
					<br />
					- Favoriser la cohésion étudiante à travers des activités
					ludiques et collaboratives ;
					<br />
					- Valoriser les compétences des étudiants MMI, en
					organisation, communication et création numérique ;
					<br />
					- Sensibiliser au rôle du jeu vidéo dans la culture, la
					créativité et les nouvelles technologies ;
					<br />
					- Offrir un espace de découverte et de compétition,
					accessible à tous les profils, joueurs comme spectateurs ;
					<br />- Promouvoir une ambiance conviviale et inclusive, où
					chacun peut partager sa passion du jeu.
				</>
			),
			image: "/img/foule.png",
		},
		{
			title: "Déroulement de la journée",
			content: (
				<>
					La Journée du Jeu Vidéo se déroulera sur une journée
					complète à l’IUT de Meaux. L’événement sera rythmé par
					plusieurs temps forts permettant à chacun de participer,
					découvrir et profiter de l’ambiance.
					<br />
					<br />
					Matin — Réalité virtuelle et découverte Installation et
					ouverture de la zone VR. Initiation à la réalité virtuelle,
					mini-jeux immersifs et découverte libre.
					<br />
					<br />
					Midi — Jeux canapé et détente Activités conviviales autour
					des jeux multijoueurs en local : Mario Kart… Pause repas et
					temps d’échange entre participants.
					<br />
					Fin de journée — Tournois et finales Lancement des
					compétitions principales : FIFA, Smash Bros, etc. Remise des
					trophées et clôture de l’événement.
				</>
			),
			image: "/img/image37.png",
		},
		{
			title: "Tournois de fin de journée",
			content: (
				<div>
					En fin de journée, les trois jeux les plus votés seront
					sélectionnés pour les tournois officiels.
					<br />
					<br />
					Les inscriptions ouvriront un peu plus tard, lorsque les
					brackets seront mis en place.
					<br />
					<br />
					Prépare-toi à défendre ton jeu favori et à montrer tes
					talents !
				</div>
			),
			image: "/img/cup.png",
		},
		{
			title: "Snack",
			content: (
				<>
					Un buffet en libre-service sera proposé à tous les
					participants et visiteurs.
					<br />
					<br />
					Ce moment de partage permettra de faire une pause entre deux
					activités, d’échanger avec les autres joueurs et de profiter
					d’une ambiance détendue et conviviale.
					<br />
					<br />
					Boissons, encas et plats variés seront mis à disposition
					pour que chacun puisse se restaurer tout au long de la
					journée.
				</>
			),
			image: "/img/food.png",
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);

	// Fonctions pour changer l'index au clic
	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};
	const defilement = [
		"MMI Game Days",
		"Le 13/03/2026",
		"A meaux",
		"Ready to play?",
		"#GameDays",
	];
	const imgListCaroussel = [
		[
			"/img/jeux/deluxe.png",
			"/img/jeux/2K.png",
			"/img/jeux/storm.png",
			"/img/jeux/fighterZ.png",
		],
		[
			"/img/jeux/party.png",
			"/img/jeux/brawlhalla.png",
			"/img/jeux/fc.png",
			"/img/jeux/saber.png",
		],
	];
	return (
		<div className="index">
			<section className="hero" id="accueil">
				<img
					src="/img/valorant.gif"
					alt="Fond d'écran Valorant"
					className="backgroundIMG"
				/>
				<div className="hero-content">
					<h1>GAME DAY</h1>
					<p>La première édition gaming de l’IUT de Meaux</p>
				</div>
				<button className="voirplus">
					<span>
						<img src="/icons/arrow.svg" alt="Voir plus" />
					</span>
				</button>
			</section>
			<section className="presentation">
				{/* chaque item avec • entre eux */}
				<div className="defilement">
					<div className="defilement-content">
						{defilement.map((item, index) => (
							<>
								<p key={index}>{item} </p>
								<p>•</p>
							</>
						))}
					</div>
					<div className="defilement-content" aria-hidden>
						{defilement.map((item, index) => (
							<>
								<p key={index}>{item} </p>
								<p>•</p>
							</>
						))}
					</div>
					<div className="defilement-content" aria-hidden>
						{defilement.map((item, index) => (
							<>
								<p key={index}>{item} </p>
								<p>•</p>
							</>
						))}
					</div>
				</div>
				<div className="presentation-content">
					<p className="text1">
						Une journée dédiée au gaming, <br /> à la découverte et
						à la <br /> compétition ! <br /> Tournois, stands, jeux
						en libre <br /> accès et bonne ambiance au <br />
						programme.
						<div className="meaux">
							<span>Meaux</span>
						</div>
						<div className="decouverte">
							<span>Découverte</span>
						</div>
						<div className="cashprize">
							<span>Cash prize</span>
						</div>
						<div className="tournois">
							<span>Tournois ?</span>
						</div>
						<div className="gamedays">
							<span>Game Days</span>
						</div>
					</p>
					<p className="text2">
						“Trouve ton équipe, ton style, ton jeu.”
					</p>
				</div>
			</section>
			<section className="carroussel" id="evenement">
				<article>
					<div>
						{/* On affiche le titre et le texte de la planche actuelle */}
						<h2>{slides[currentIndex].title}</h2>
						<p>{slides[currentIndex].content}</p>

						<div className="buttons">
							<button onClick={prevSlide}>
								<img src="/icons/arrow.svg" alt="Précédent" />
							</button>
							<button className="active" onClick={nextSlide}>
								<img src="/icons/arrow.svg" alt="Suivant" />
							</button>
						</div>
					</div>
					{/* On affiche l'image correspondante */}
					<img src={slides[currentIndex].image} alt="" />
				</article>
			</section>

			<section className="jeux" id="vote">
				<div className="info">
					<div className="title">
						<h2>
							Vote pour tes <br /> jeux favoris !
						</h2>
						<p>
							Choisis les jeux que tu veux voir sur les <br />
							stands, dans les tournois ou en réalité virtuelle.
						</p>
					</div>
					<p>
						Les participants choisiront les <br /> jeux qui seront
						présents lors de <br /> la Journée du Jeu Vidéo.
						<br />
						<br />
						Ton vote permettra de décider <br /> des tournois
						officiels, des jeux <br /> multijoueurs canapé et des
						jeux <br /> VR proposés sur place.
					</p>
					<button className="voir">
						<span>Voter maintenant</span>
						<img src="/icons/arrowRight.svg" alt="" />
					</button>
				</div>

				<div className="doubleCaroussel">
					{imgListCaroussel.map((colonne, colIndex) => (
						<article
							className="caroussel"
							key={`col-${colIndex}`}
							aria-hidden={colIndex === 1 ? true : undefined}
						>
							<div className={`scroll scroll${colIndex + 1}`}>
								{colonne.map((src, imgIndex) => (
									<img
										key={`img-${colIndex}-${imgIndex}`}
										src={src}
										alt="Jeu"
									/>
								))}
							</div>
							<div
								className={`scroll scroll${colIndex + 1}`}
								aria-hidden
							>
								{colonne.map((src, imgIndex) => (
									<img
										key={`img-hidden-${colIndex}-${imgIndex}`}
										src={src}
										alt=""
									/>
								))}
							</div>
						</article>
					))}
				</div>
			</section>
		</div>
	);
};

export default Index;
