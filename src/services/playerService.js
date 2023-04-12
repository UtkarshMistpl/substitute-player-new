import { BACKEND_PORT } from "../config/constants";

export const getFilteredPlayers = async () => {
	const response = await fetch(`${BACKEND_PORT}/players/getFilteredPlayers`, {
		method: "POST",
		body: JSON.stringify({}),
	});
	const json = await response.json();
	console.log("players", json);

	return json.players;
};
