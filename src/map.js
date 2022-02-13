import "leaflet/dist/leaflet.css";
import L from "leaflet";

let mapDom = L.map("map").setView([51.505, -0.09], 13);

let map = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
  }
).addTo(mapDom);

export { map };
