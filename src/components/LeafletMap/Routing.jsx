import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import {useMap, useMapEvents} from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconAnchor:[0 , -41],
});

export default function Routing() {
    const map = useMap();


    useEffect(() => {
        if (!map) return;

        const routingControl = L.Routing.control({
            waypoints: [L.latLng(29.62, 52.51700), L.latLng(29.62, 52.51700)],
            routeWhileDragging: true
        }).addTo(map);

        return () => map.removeControl(routingControl);
    }, [map]);

    return null;
}

