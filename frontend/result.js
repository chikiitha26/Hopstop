// frontend/result.js

const params = new URLSearchParams(location.search);
const bus = params.get("bus");
const start = params.get("start");
const destination = params.get("destination");
const output = document.getElementById("output");

async function loadResults() {
  let url = "";

  try {
    if (bus) {
      url = `/api/route/${encodeURIComponent(bus)}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data.stops) {
        output.innerHTML = "Bus not found";
        return;
      }

      output.innerHTML =
        `<strong>🚌 Bus ${data.busNumber}</strong>` +
        data.stops.map(s => `<div class="stop">${s}</div>`).join("");

    } else {
      url = `/api/search?source=${encodeURIComponent(start)}&destination=${encodeURIComponent(destination)}`;
      const res = await fetch(url);
      const routes = await res.json();

      if (!routes.length) {
        output.innerHTML = "No routes found";
        return;
      }

      output.innerHTML = routes.map(r => `
        <div class="route-box">
          <strong>🚌 ${r.busNumber}</strong>
          ${r.stops.map(s => `<div class="stop">${s}</div>`).join("")}
        </div>
      `).join("");
    }

  } catch (error) {
    output.innerHTML = "Error loading route data";
    console.error(error);
  }
}
// frontend/result.js

const searchAgainBtn = document.getElementById("searchAgainBtn");

searchAgainBtn.addEventListener("click", () => {
  window.location.href = "/search.html";
});

loadResults();