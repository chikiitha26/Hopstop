(() => {
  const busInput = document.getElementById("bus");
  const startInput = document.getElementById("start");
  const destInput = document.getElementById("destination");
  const busList = document.getElementById("busNumbers");
  const stopsList = document.getElementById("stops");
  const nextBtn = document.getElementById("nextBtn");
  const validationMsg = document.getElementById("validationMsg");

  // ── Validation ────────────────────────────────────────────────
  function validate() {
    const bus = busInput.value.trim();
    const start = startInput.value.trim();
    const dest = destInput.value.trim();

    validationMsg.textContent = "";

    if (bus) {
      startInput.disabled = true;
      destInput.disabled = true;
      nextBtn.disabled = false;
      return;
    }

    startInput.disabled = false;
    destInput.disabled = false;

    if (start || dest) {
      busInput.disabled = true;

      if (start && dest) {
        if (start.toLowerCase() === dest.toLowerCase()) {
          validationMsg.textContent = "Start and destination must be different.";
          nextBtn.disabled = true;
        } else {
          nextBtn.disabled = false;
        }
      } else {
        nextBtn.disabled = true;
      }
    } else {
      busInput.disabled = false;
      nextBtn.disabled = true;
    }
  }

  [busInput, startInput, destInput].forEach((el) =>
    el.addEventListener("input", validate)
  );

  // Clear one field re-enables others
  busInput.addEventListener("input", () => {
    if (!busInput.value.trim()) {
      startInput.disabled = false;
      destInput.disabled = false;
    }
    validate();
  });

  // ── Load suggestions ─────────────────────────────────────────
  async function loadData() {
    try {
      const res = await fetch("/api/routes");
      if (!res.ok) throw new Error("Failed to fetch routes");

      const data = await res.json();
      const buses = new Set();
      const stops = new Set();

      data.forEach((r) => {
        buses.add(r.busNumber);
        r.stops.forEach((s) => stops.add(s));
      });

      buses.forEach((b) => {
        const opt = document.createElement("option");
        opt.value = b;
        busList.appendChild(opt);
      });

      // Sort stops alphabetically for easier autocomplete browsing
      [...stops]
        .sort((a, b) => a.localeCompare(b))
        .forEach((s) => {
          const opt = document.createElement("option");
          opt.value = s;
          stopsList.appendChild(opt);
        });

    } catch (err) {
      validationMsg.textContent = "⚠️ Failed to load route data. Please refresh.";
      console.error(err);
    } finally {
      validate();
    }
  }

  // ── Navigate to results ───────────────────────────────────────
  function goNext() {
    const bus = busInput.value.trim();
    const start = startInput.value.trim();
    const dest = destInput.value.trim();

    const params = new URLSearchParams();
    if (bus) {
      params.set("bus", bus);
    } else {
      params.set("start", start);
      params.set("destination", dest);
    }

    window.location.href = "/result.html?" + params.toString();
  }

  nextBtn.addEventListener("click", goNext);

  // Allow pressing Enter to submit
  [busInput, startInput, destInput].forEach((el) => {
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !nextBtn.disabled) goNext();
    });
  });

  loadData();
})();