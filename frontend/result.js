(() => {
  const params = new URLSearchParams(location.search);
  const bus = params.get("bus");
  const start = params.get("start");
  const destination = params.get("destination");
  const output = document.getElementById("output");

  // ── Render helpers ───────────────────────────────────────────
  function renderStop(stop, type = "middle") {
    const div = document.createElement("div");
    div.className = `stop ${type}`;

    const icon = type === "start" ? "🟢" : type === "end" ? "🔴" : "•";
    div.innerHTML = `<span class="stop-icon" aria-hidden="true">${icon}</span> ${stop}`;
    return div;
  }

  function renderBusRoute(busNumber, stops, isSearch = false) {
    const box = document.createElement("div");
    box.className = "route-box";

    const header = document.createElement("div");
    header.className = "route-header";

    if (isSearch) {
      header.innerHTML = `
        <a href="result.html?bus=${encodeURIComponent(busNumber)}" class="bus-link" aria-label="View full route for bus ${busNumber}">
          🚌 Bus <strong>${busNumber}</strong>
        </a>
        <span class="stop-count">${stops.length} stop${stops.length !== 1 ? "s" : ""}</span>
      `;
    } else {
      header.innerHTML = `
        <span class="bus-label">🚌 Bus <strong>${busNumber}</strong></span>
        <span class="stop-count">${stops.length} stops total</span>
      `;
    }

    box.appendChild(header);

    const stopsContainer = document.createElement("div");
    stopsContainer.className = "stops-list";

    stops.forEach((stop, i) => {
      const type = i === 0 ? "start" : i === stops.length - 1 ? "end" : "middle";
      stopsContainer.appendChild(renderStop(stop, type));
    });

    box.appendChild(stopsContainer);
    return box;
  }

  // ── Load results ─────────────────────────────────────────────
  async function loadResults() {
    output.innerHTML = `<div class="loading-state"><span class="spinner" aria-hidden="true"></span> Loading route…</div>`;

    try {
      // CASE 1: Bus number search → full route
      if (bus) {
        const res = await fetch(`/api/route/${encodeURIComponent(bus)}`);

        if (res.status === 404) {
          output.innerHTML = `<div class="empty-state">🚌 Bus <strong>${bus}</strong> not found. <a href="/search.html">Try another search</a>.</div>`;
          return;
        }

        if (!res.ok) throw new Error("Server error");

        const data = await res.json();
        output.innerHTML = "";
        document.title = `Bus ${data.busNumber} – HopStop`;
        output.appendChild(renderBusRoute(data.busNumber, data.stops, false));
      }

      // CASE 2: Source → destination
      else {
        if (!start || !destination) {
          output.innerHTML = `<div class="empty-state">Missing search parameters. <a href="/search.html">Search again</a>.</div>`;
          return;
        }

        const url = `/api/search?source=${encodeURIComponent(start)}&destination=${encodeURIComponent(destination)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Server error");

        const routes = await res.json();
        output.innerHTML = "";

        if (!routes.length) {
          output.innerHTML = `
            <div class="empty-state">
              No direct routes found from <strong>${start}</strong> to <strong>${destination}</strong>.
              <br><a href="/search.html">Try different stops</a>.
            </div>`;
          return;
        }

        const summary = document.createElement("p");
        summary.className = "results-summary";
        summary.textContent = `${routes.length} route${routes.length !== 1 ? "s" : ""} found from ${start} → ${destination}`;
        output.appendChild(summary);

        routes.forEach((r) => {
          output.appendChild(renderBusRoute(r.busNumber, r.stops, true));
        });
      }
    } catch (err) {
      output.innerHTML = `<div class="empty-state error">⚠️ Error loading route data. <a href="/search.html">Try again</a>.</div>`;
      console.error(err);
    }
  }

  loadResults();
})();
