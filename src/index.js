import "../src/styles.scss";
import { map } from "./map";
import { flightsData } from "./flights";
import { FlightCard } from "./flightCard";

const flightsContainer = document.getElementById("flights");

let cardHTML = "";

flightsData.forEach((flight) => {
  if (flight.estDepartureAirport && flight.estArrivalAirport) {
    cardHTML += `<flight-card flight="${flight.callsign}" info="Flight from ${flight.estDepartureAirport} airport to ${flight.estArrivalAirport} airport."></flight-card>`;
  }
});

flightsContainer.innerHTML = cardHTML;

console.log(flightsData);
