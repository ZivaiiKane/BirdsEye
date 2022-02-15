import "../src/styles.scss";
import { map } from "./map";
import { flightsData } from "./flights";
import { FlightCard } from "./flightCard";

const flightsContainer = document.getElementById("flights");

let cardHTML = "";
let selectedFlightICAO;

flightsData.forEach((flight) => {
  if (flight.estDepartureAirport && flight.estArrivalAirport) {
    cardHTML += `<flight-card id="${flight.icao24}" flight="${flight.callsign}" info="Flight from ${flight.estDepartureAirport} airport to ${flight.estArrivalAirport} airport."></flight-card>`;
  }
});

flightsContainer.innerHTML = cardHTML;

flightsData.forEach((flight) => {
  if (flight.estDepartureAirport && flight.estArrivalAirport) {
    const selectedElement = document.getElementById(`${flight.icao24}`);

    selectedElement.selectFlightCallback = () => {
      if (!!selectedFlightICAO) {
        document.getElementById(selectedFlightICAO).removeAttribute("selected");
      }

      selectedFlightICAO = flight.icao24;
      selectedElement.setAttribute("selected", true);
    };
  }
});
