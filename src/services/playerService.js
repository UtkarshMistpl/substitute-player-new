import { BACKEND_PORT } from "../config/constants";

export const getFilteredPlayers = async (playerObj) => {
	const response = await fetch(`${BACKEND_PORT}/players/getFilteredPlayers`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(playerObj),
	});
	const json = await response.json();
	console.log("players", json);

	return json.players;
};

export const getAllPlayers = async () => {
	const response = await fetch(`${BACKEND_PORT}/players/getAllPlayers`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ location: "current" }),
	});
	const json = await response.json();
	console.log("players", json);

	return json.players;
};
