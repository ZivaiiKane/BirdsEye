import "../src/styles.scss";
import { map } from "./map";
import { flightsData } from "./flights";
import { FlightCard } from "./flightCard";

const flightsContainer = document.getElementById("flights");

let cardHTML = "";

flightsData.forEach((flight) => {
  cardHTML += `<flight-card flight="${flight.callsign}"></flight-card>`;
});

flightsContainer.innerHTML = cardHTML;

console.log(flightsData);
