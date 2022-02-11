import "leaflet/dist/leaflet.css";
import L from "leaflet";

let mapDom = L.map("map").setView([51.505, -0.09], 13);

let map = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {}
).addTo(mapDom);

export { map };
