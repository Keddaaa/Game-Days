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
};
