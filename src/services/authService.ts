const API_BASE_URL = "https://gameday.alwaysdata.net";

type RegisterPayload = {
	nom_prenom: string;
	identifiant: string;
	formation: string;
	mot_de_passe: string;
};

type LoginPayload = {
	identifiant: string;
	mot_de_passe: string;
};

export const authService = {
	async register(payload: RegisterPayload) {
		const response = await fetch(`${API_BASE_URL}/register.php`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		return await response.json();
	},

	async login(payload: LoginPayload) {
		const response = await fetch(`${API_BASE_URL}/login.php`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		const data = await response.json();

		if (data.success && data.user) {
			localStorage.setItem("user", JSON.stringify(data.user));
		}

		return data;
	},

	logout() {
		localStorage.removeItem("user");
	},

	getUser() {
		const user = localStorage.getItem("user");
		return user ? JSON.parse(user) : null;
	},

	async saveVote(id_jeu: string) {
		const user = authService.getUser();
		if (!user || !user.id) {
			return { success: false, message: "Utilisateur non connecté" };
		}

		const response = await fetch(`${API_BASE_URL}/vote.php`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id_user: user.id,
				id_jeu: id_jeu,
			}),
		});

		return await response.json();
	},

	async saveVotes(id_jeux: string[]) {
		const results = [];
		for (const id_jeu of id_jeux) {
			const result = await authService.saveVote(id_jeu);
			results.push(result);
		}
		return results;
	},

	async saveSondage(data: {
		plateforme: string;
		frequence_jeu: string;
		type_de_jeu_prefere: string;
		participation: string;
		participation_anterieure: string;
	}) {
		const user = authService.getUser();
		if (!user || !user.id) {
			return { success: false, message: "Utilisateur non connecté" };
		}

		const response = await fetch(`${API_BASE_URL}/sondage.php`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id_user: user.id,
				plateforme: data.plateforme,
				frequence_jeu: data.frequence_jeu,
				type_de_jeu_prefere: data.type_de_jeu_prefere,
				participation: data.participation,
				participation_anterieure: data.participation_anterieure,
			}),
		});

		return await response.json();
	},
};
