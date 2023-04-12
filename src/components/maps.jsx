import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCurrentLocation } from "../hooks/useCurrentLocation";

const containerStyle = {
	width: "600px",
	height: "400px",
};

const libraries = ["places", "marker"];

function MyMapComponent() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: String(process.env.REACT_APP_GOOGLEMAPS_KEY),
		libraries,
	});
	console.log(
		"google maps api key",
		String(process.env.REACT_APP_GOOGLEMAPS_KEY)
	);

	const [center, setCenter] = useState({
		lat: 77.745,
		lng: 38.523,
	});
	const { lat, lng, getLocation } = useCurrentLocation();
	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	useEffect(() => {
		getLocation();
	}, []);

	useEffect(() => {
		setCenter({
			lat: lat,
			lng: lng,
		});
	}, [lat, lng]);

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<></>
	);
}

export default React.memo(MyMapComponent);
