import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import {Marker,useMapEvents} from "react-leaflet";
import L from 'leaflet';
import {useState} from "react";
import MapStation from "../MapStation/MapStation";
import Routing from "./Routing";
import {click} from "@testing-library/user-event/dist/click";

let MyIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconAnchor:[0 , -41],
    popupAnchor:[0]
})


const LeafletMap = () => {
   const position = [29.623179702826217, 52.517008781433105]
    const [latlng , setLatLng] = useState(null);
    const [end , setEnd] = useState(null);

    const MyComponent = () => {
        let map = useMapEvents({
            click: () => {
                map.getCenter();
                setLatLng(map.getCenter());
                console.log(latlng);
            },
            dblclick:()=>{
                map.getCenter();
                setEnd(map.getCenter());
                console.log(end);
            }
        })
        return null
    }


  return(
     <div>
         <MapContainer style={{height:"100vh"}} center={position} zoom={20} scrollWheelZoom={true}>
             <TileLayer
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 url="https://map.pishgamanasia.ir/tile/{z}/{x}/{y}.png"
             />
             <MyComponent/>
             <Routing/>
         </MapContainer>
         <MapStation data={latlng === null ? '' : latlng} end={end === null ? '' : end}/>
     </div>
  )
}



export default LeafletMap;