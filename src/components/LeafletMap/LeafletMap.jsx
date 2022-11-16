import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import {Marker,useMapEvents} from "react-leaflet";
import L from 'leaflet';
import {useState} from "react";
import MapStation from "../MapStation/MapStation";

let MyIcon = L.icon({
    iconUrl: 'https://map.ir/css/images/marker-default-red.svg',
    iconSize:[45 , 41],
    iconAnchor:[0 , -41],
    popupAnchor:[0]
})


const LeafletMap = () => {
   const position = [29.623179702826217, 52.517008781433105]
    const [latlng , setLatLng] = useState(null);


    const MyComponent = () => {
        let map = useMapEvents({
            click: () => {
                map.getCenter();
                setLatLng(map.getCenter());
                console.log(map.getCenter())
            },
        })
        return null
    }
    console.log(latlng);
  return(
     <div>
         <MapContainer style={{height:"100vh"}} center={position} zoom={20} scrollWheelZoom={true}>
             <TileLayer
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 url="https://map.pishgamanasia.ir/tile/{z}/{x}/{y}.png"
             />
             <Marker
                 position={[latlng === null ? '' : latlng.lat , latlng === null ? '' : latlng.lng]}
                 icon={MyIcon}
             />
             <MyComponent/>
         </MapContainer>
         <MapStation data={latlng === null ? '' : latlng}/>
     </div>
  )
}



export default LeafletMap;