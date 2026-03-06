// frontend/search.js

const busInput = document.getElementById("bus");
const startInput = document.getElementById("start");
const destInput = document.getElementById("destination");
const busList = document.getElementById("busNumbers");
const stopsList = document.getElementById("stops");
const nextBtn = document.getElementById("nextBtn");

// Enable/disable logic
function validate() {
  const busFilled = busInput.value.trim() !== "";
  const startFilled = startInput.value.trim() !== "";
  const destFilled = destInput.value.trim() !== "";

  if (busFilled) {
    startInput.disabled = true;
    destInput.disabled = true;
    nextBtn.disabled = false;
  } 
  else if (startFilled || destFilled) {
    busInput.disabled = true;
    nextBtn.disabled = !(startFilled && destFilled);
  } 
  else {
    busInput.disabled = false;
    startInput.disabled = false;
    destInput.disabled = false;
    nextBtn.disabled = true;
  }
}

[busInput, startInput, destInput].forEach(i => i.addEventListener("input", validate));

// Load bus & stop data from backend
async function loadData() {
  try {
    const res = await fetch("/api/routes");
    const data = await res.json();

    const buses = new Set();
    const stops = new Set();

    data.forEach(r => {
      buses.add(r.busNumber);
      r.stops.forEach(s => stops.add(s));
    });

    buses.forEach(b => {
      const opt = document.createElement("option");
      opt.value = b;
      busList.appendChild(opt);
    });

    stops.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s;
      stopsList.appendChild(opt);
    });

  } catch (err) {
    alert("Failed to load route data.");
    console.error(err);
  }
}

// Go to results page
function goNext() {
  const params = new URLSearchParams({
    bus: busInput.value,
    start: startInput.value,
    destination: destInput.value
  });

  window.location.href = "result.html?" + params.toString();
}

nextBtn.addEventListener("click", goNext);
loadData();