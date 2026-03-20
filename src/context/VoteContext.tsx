import {
	createContext,
	useState,
	useContext,
	type ReactNode,
	type FC,
} from "react";

interface VoteContextType {
	// Page 1
	frequence: string;
	setFrequence: (value: string) => void;
	plateforme: string;
	setPlateforme: (value: string) => void;

	// Page 3
	typeJeu: string;
	setTypeJeu: (value: string) => void;
	participation: string;
	setParticipation: (value: string) => void;

	// Page 4
	role: string;
	setRole: (value: string) => void;
	experienceTournoi: string;
	setExperienceTournoi: (value: string) => void;

	// Page 6
	selectedGames: number[];
	setSelectedGames: (games: number[]) => void;

	// Reset
	resetVote: () => void;
}

const VoteContext = createContext<VoteContextType | undefined>(undefined);

export const VoteProvider: FC<{ children: ReactNode }> = ({
	children,
}: {
	children: ReactNode;
}) => {
	// Page 1
	const [frequence, setFrequence] = useState("");
	const [plateforme, setPlateforme] = useState("");

	// Page 3
	const [typeJeu, setTypeJeu] = useState("");
	const [participation, setParticipation] = useState("");

	// Page 4
	const [role, setRole] = useState("");
	const [experienceTournoi, setExperienceTournoi] = useState("");

	// Page 6
	const [selectedGames, setSelectedGames] = useState<number[]>([]);

	const resetVote = () => {
		setFrequence("");
		setPlateforme("");
		setTypeJeu("");
		setParticipation("");
		setRole("");
		setExperienceTournoi("");
		setSelectedGames([]);
	};

	return (
		<VoteContext.Provider
			value={{
				frequence,
				setFrequence,
				plateforme,
				setPlateforme,
				typeJeu,
				setTypeJeu,
				participation,
				setParticipation,
				role,
				setRole,
				experienceTournoi,
				setExperienceTournoi,
				selectedGames,
				setSelectedGames,
				resetVote,
			}}
		>
			{children}
		</VoteContext.Provider>
	);
};

export const useVote = () => {
	const context = useContext(VoteContext);
	if (!context) {
		throw new Error("useVote doit être utilisé dans un VoteProvider");
	}
	return context;
};
