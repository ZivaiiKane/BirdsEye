const template = document.createElement("template");

template.innerHTML = `
    <style>
    :root {
    --inflight: #3388ff;
    --landed: #2daaa6;
    }

    .card {
    display: grid;
    min-height: 11.25rem;
    grid-template-rows: repeat(3, max-content) 1fr max-content;
    width: calc(100% - 2rem);
    padding: 1rem;
    border: solid 1.5px #1b2239;
    transition: box-shadow 200ms ease, transform 200ms ease;
    box-shadow: 0px 0px 0 #10162f;
    }

    .card:hover {
    transform: translate(4px, -4px);
    box-shadow: -8px 8px 0 #10162f;
    }

    .card > span {
    display: flex;
    text-transform: capitalize;
    margin-bottom: 0.75rem;
    }

    .card > h3 {
    font-weight: 700;
    line-height: 1.1;
    margin: 0;
    margin-bottom: 0px;
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    }

    .card > div {
    padding: 0.5rem 0 0 0;
    }

    #info {
    margin: 0.5rem 0 0 0;
    }

    .card .btnTrack {
    width: 5rem;
    text-align: center;
    background-color: #ffd300;
    padding: 0.5rem;
    font-weight: 400;
    transition: box-shadow 200ms ease, transform 200ms ease;
    box-shadow: 0px 0px 0 #10162f;
    cursor: pointer;
    }

    .card .btnTrack:hover {
    transform: translate(4px, -4px);
    box-shadow: -8px 8px 0 #10162f;
    }

    #status {
    color: #2daaa6;
    font-weight: 400;
    margin-left: 5px;
    }
    </style>

    <div class="card">
        <span>Flight</span>
        <h3>Flight 123454</h3>
        <div>
          <span
            ><i class="fa-solid fa-plane-departure"></i> Status:
            <span id="status">Landed</span>
          </span>
        </div>
        <div>
          <span id="info"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span
          >
        </div>

        <div class="btnTrack"><span>Track </span></div>
      </div>

`;

class FlightCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("flight");
  }
}

window.customElements.define("flight-card", FlightCard);

export { FlightCard };
