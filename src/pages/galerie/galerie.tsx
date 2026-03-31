import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./galerie.scss";

interface MediaItem {
	type: "image" | "video";
	src: string;
	alt: string;
}

const Galerie = () => {
	const navigate = useNavigate();
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
	const [filter, setFilter] = useState<"all" | "photos" | "videos">("all");

	const media: MediaItem[] = [
		{ type: "image", src: "/img/galerie/IMG_5221.jpg", alt: "Game Day - Photo 1" },
		{ type: "video", src: "/img/galerie/A001_03261641_C051.mov", alt: "Game Day - Vidéo 1" },
		{ type: "image", src: "/img/galerie/IMG_5231.jpg", alt: "Game Day - Photo 2" },
		{ type: "image", src: "/img/galerie/image.png", alt: "Game Day - Photo 3" },
		{ type: "video", src: "/img/galerie/A001_03261703_C052.mov", alt: "Game Day - Vidéo 2" },
		{ type: "image", src: "/img/galerie/IMG_6758.jpg", alt: "Game Day - Photo 4" },
		{ type: "image", src: "/img/galerie/image1.png", alt: "Game Day - Photo 5" },
		{ type: "video", src: "/img/galerie/A001_03261704_C053.mov", alt: "Game Day - Vidéo 3" },
		{ type: "video", src: "/img/galerie/IMG_5084.mov", alt: "Game Day - Vidéo 4" },
	];

	const filteredMedia = media.filter((item) => {
		if (filter === "photos") return item.type === "image";
		if (filter === "videos") return item.type === "video";
		return true;
	});

	const openLightbox = (index: number) => setLightboxIndex(index);
	const closeLightbox = () => setLightboxIndex(null);

	const goNext = useCallback(() => {
		if (lightboxIndex === null) return;
		setLightboxIndex((lightboxIndex + 1) % filteredMedia.length);
	}, [lightboxIndex, filteredMedia.length]);

	const goPrev = useCallback(() => {
		if (lightboxIndex === null) return;
		setLightboxIndex(
			(lightboxIndex - 1 + filteredMedia.length) % filteredMedia.length
		);
	}, [lightboxIndex, filteredMedia.length]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (lightboxIndex === null) return;
			if (e.key === "Escape") closeLightbox();
			if (e.key === "ArrowRight") goNext();
			if (e.key === "ArrowLeft") goPrev();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [lightboxIndex, goNext, goPrev]);

	const defilement = [
		"Game Day 2026",
		"Souvenirs",
		"IUT de Meaux",
		"Moments forts",
		"#GameDays",
	];

	return (
		<div className="galerie">
			<section className="galerie-hero">
				<div className="hero-overlay" />
				<div className="hero-content">
					<button className="back-btn" onClick={() => navigate("/")}>
						<img src="/icons/arrowRight.svg" alt="Retour" />
						<span>Retour</span>
					</button>
					<h1>Galerie</h1>
					<p>Revivez les meilleurs moments du Game Day</p>
				</div>
			</section>

			<section className="defilement-section">
				<div className="defilement">
					{[0, 1, 2].map((i) => (
						<div
							className="defilement-content"
							key={i}
							aria-hidden={i > 0 ? true : undefined}
						>
							{defilement.map((item, index) => (
								<span key={`${i}-${index}`}>
									<p>{item}</p>
									<p className="dot">•</p>
								</span>
							))}
						</div>
					))}
				</div>
			</section>

			<section className="galerie-content">
				<div className="galerie-header">
					<h2>
						Les moments <br /> capturés
					</h2>
					<div className="filters">
						{(["all", "photos", "videos"] as const).map((f) => (
							<button
								key={f}
								className={filter === f ? "active" : ""}
								onClick={() => setFilter(f)}
							>
								{f === "all"
									? "Tout"
									: f === "photos"
									? "Photos"
									: "Vidéos"}
							</button>
						))}
					</div>
				</div>

				<div className="masonry-grid">
					{filteredMedia.map((item, index) => (
						<div
							className={`grid-item ${item.type}`}
							key={index}
							onClick={() => openLightbox(index)}
						>
							{item.type === "image" ? (
								<img src={item.src} alt={item.alt} loading="lazy" />
							) : (
								<div className="video-thumbnail">
									<video src={item.src} muted preload="metadata" />
									<div className="play-icon">
										<svg
											viewBox="0 0 24 24"
											fill="white"
											width="48"
											height="48"
										>
											<path d="M8 5v14l11-7z" />
										</svg>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</section>

			{lightboxIndex !== null && (
				<div className="lightbox" onClick={closeLightbox}>
					<div
						className="lightbox-content"
						onClick={(e) => e.stopPropagation()}
					>
						<button className="lightbox-close" onClick={closeLightbox}>
							&times;
						</button>
						<button className="lightbox-nav prev" onClick={goPrev}>
							<img src="/icons/arrow.svg" alt="Précédent" />
						</button>

						{filteredMedia[lightboxIndex].type === "image" ? (
							<img
								src={filteredMedia[lightboxIndex].src}
								alt={filteredMedia[lightboxIndex].alt}
							/>
						) : (
							<video
								src={filteredMedia[lightboxIndex].src}
								controls
								autoPlay
							/>
						)}

						<button className="lightbox-nav next" onClick={goNext}>
							<img src="/icons/arrow.svg" alt="Suivant" />
						</button>
						<div className="lightbox-counter">
							{lightboxIndex + 1} / {filteredMedia.length}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Galerie;
