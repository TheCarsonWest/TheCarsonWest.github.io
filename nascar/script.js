  let groups = {};
  let vehicleMap = {};

  function addGroup() {
    const name = document.getElementById('groupName').value.trim();
    const cars = document.getElementById('groupCars').value.trim().split(',').map(c => c.trim());
    if (name && cars.length && !groups[name]) {
      groups[name] = cars;
      document.getElementById('groupName').value = '';
      document.getElementById('groupCars').value = '';
      updateGroupDisplay(); // Update immediately
    }
  }

  function deleteGroup(name) {
    delete groups[name];
    updateGroupDisplay();
  }

  function updateGroupDisplay() {
    const container = document.getElementById('groupsDisplay');
    container.innerHTML = "<h2>Groups</h2>";

    for (let group in groups) {
      const cars = groups[group];
      let sum = 0;
      let count = 0;
      let tableRows = '';

      cars.forEach(c => {
        const v = vehicleMap[c];
        if (v) {
          const pos = v.running_position;
          const badgeURL = `https://cf.nascar.com/data/images/carbadges/1/${v.vehicle_number}.png`;
          sum += pos;
          count++;
          tableRows += `<tr>
            <td><img src="${badgeURL}" alt="badge">#${v.vehicle_number}</td>
            <td>${v.driver.full_name}</td>
            <td>${pos}</td>
          </tr>`;
        } else {
          // still show car number even if data isn't loaded yet
          tableRows += `<tr>
            <td>#${c}</td><td>–</td><td>–</td>
          </tr>`;
        }
      });

      const avg = count ? (sum / count).toFixed(2) : 'N/A';

      container.innerHTML += `
        <div class="group-box">
          <div><strong>${group}</strong> <button onclick="deleteGroup('${group}')">Delete</button></div>
          <div>Avg Position: ${avg}</div>
          <table>
            <thead><tr><th>Car</th><th>Driver</th><th>Pos</th></tr></thead>
            <tbody>${tableRows}</tbody>
          </table>
        </div>`;
    }
  }

  async function fetchAndDisplay() {
    try {
      const res = await fetch('https://cf.nascar.com/cacher/live/live-feed.json');
      const data = await res.json();
      const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
      table.innerHTML = "";
      vehicleMap = {};

      for (let v of data.vehicles) {
        vehicleMap[v.vehicle_number] = v;
      }

      for (let v of data.vehicles) {
const row = table.insertRow();

// # Number
row.insertCell().textContent = v.vehicle_number;

// Badge
const badgeCell = row.insertCell();
const badge = document.createElement("img");
badge.src = `https://cf.nascar.com/data/images/carbadges/1/${v.vehicle_number}.png`;
badge.alt = "badge";
badgeCell.appendChild(badge);

// Name
row.insertCell().textContent = v.driver.full_name;

// Δ Time
row.insertCell().textContent = v.delta !== -1 ? `${v.delta.toFixed(3)}s` : '—';

// Pit Stops
const pitCount = Array.isArray(v.pit_stops) ? v.pit_stops.length : 0;
row.insertCell().textContent = pitCount;

// Laps Since Last Pit
let lapsSincePit = '—';
if (pitCount > 0 && v.laps_completed != null) {
  const lastPit = v.pit_stops[pitCount - 1];
  const lastPitLap = lastPit.pit_in_lap_count || 0;
  lapsSincePit = v.laps_completed - lastPitLap;
}
row.insertCell().textContent = lapsSincePit;

// Laps Led
let lapsLed = 0;
if (Array.isArray(v.laps_led)) {
  v.laps_led.forEach(segment => {
    lapsLed += (segment.end_lap - segment.start_lap + 1);
  });
}
row.insertCell().textContent = lapsLed;

// Avg Running Position
row.insertCell().textContent = v.average_running_position?.toFixed(2) ?? '—';

      }

      updateGroupDisplay();
    } catch (err) {
      console.error("Fetch/display error:", err);
    }
  }

  setInterval(fetchAndDisplay, 1000);