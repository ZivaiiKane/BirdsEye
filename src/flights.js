import axios from "axios";

async function getFlights(begin = "1644592599", end = "1644596199") {
  try {
    const response = axios
      .get(
        `https://opensky-network.org/api/flights/all?begin=${begin}&end=${end}`
      )
      .then((result) => result.data);

    return response;
  } catch (error) {
    console.error("error: ", error);
  }
}

const data = await getFlights();
const flightsData = data.slice(0, 99);

export { flightsData, getFlights };
