import React, { useEffect } from "react";
import FilterForm from "../components/filterForm";
import tempMap from "../assets/background/temMapImage.jpg";
import { Many } from "lodash";
import MyMapComponent from "../components/maps";
import { getAllPlayers, getFilteredPlayers } from "../services/playerService";
const Home = () => {
	useEffect(() => {
		function fetchApi() {
			getAllPlayers();
		}
		fetchApi();
	}, []);
	return (
		<>
			<div className="mt-5 pt-5">
				{/* <MyMapComponent /> */}
				{/* <MultiSelectComponents /> */}
				{/* <h1>Hello world!</h1> */}
			</div>
			<div className="container-fluid">
				<div className="row justify-content-start">
					<div className="col-11 col-md-8 col-lg-6">
						{/* <img className="img-fluid" src={tempMap} /> */}
						<FilterForm />
					</div>
					<div className="col-11 col-md-8 col-lg-6">
						{/* <img className="img-fluid" src={tempMap} /> */}
						<MyMapComponent />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
