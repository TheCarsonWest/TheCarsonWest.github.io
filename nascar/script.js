let groups = {};
let vehicleMap = {};

const pointsDistribution = [40, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1];

function addGroup() {
  const name = document.getElementById('groupName').value.trim();
  const cars = document.getElementById('groupCars').value.trim().split(',').map(c => c.trim());
  if (name && cars.length && !groups[name]) {
    groups[name] = cars;
    document.getElementById('groupName').value = '';
    document.getElementById('groupCars').value = '';
    updateGroupDisplay();
  }
}

function deleteGroup(name) {
  delete groups[name];
  updateGroupDisplay();
}

function deleteAllGroups() {
  groups = {};
  updateGroupDisplay();
}

function calculateGroupScore(groupCars, scoringSystem, topX) {
  let positions = groupCars
    .map(c => vehicleMap[c]?.running_position)
    .filter(pos => pos !== undefined)
    .sort((a, b) => a - b);

  if (scoringSystem === 'avgPosition') {
    const topPositions = positions.slice(0, topX);
    return topPositions.length ? (topPositions.reduce((sum, pos) => sum + pos, 0) / topPositions.length).toFixed(2) : 'N/A';
  } else if (scoringSystem === 'champPoints') {
    return positions.reduce((sum, pos) => {
      const index = pos - 1;
      return sum + (index < pointsDistribution.length ? pointsDistribution[index] : 1);
    }, 0);
  }
  return 'N/A';
}

function updateGroupDisplay() {
  const container = document.getElementById('groupsDisplay');
  const scoringSystem = document.getElementById('scoringSystem').value;
  const topXInput = document.getElementById('topXInput');
  const topX = parseInt(document.getElementById('topX').value) || 3;

  // Show/hide Top X input based on scoring system
  topXInput.style.display = scoringSystem === 'avgPosition' ? 'block' : 'none';

  // Update leaderboard
  const leaderboardBody = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
  leaderboardBody.innerHTML = '';
  const groupScores = Object.entries(groups).map(([name, cars]) => ({
    name,
    score: calculateGroupScore(cars, scoringSystem, topX)
  }));

  // Sort groups by score (ascending for avgPosition, descending for champPoints)
  groupScores.sort((a, b) => {
    if (a.score === 'N/A' && b.score === 'N/A') return 0;
    if (a.score === 'N/A') return 1;
    if (b.score === 'N/A') return -1;
    return scoringSystem === 'avgPosition' ? a.score - b.score : b.score - a.score;
  });

  groupScores.forEach(({ name, score }) => {
    const row = leaderboardBody.insertRow();
    row.insertCell().textContent = name;
    row.insertCell().textContent = score;
  });

  // Update group boxes
  container.innerHTML = `
    <h2>Groups</h2>
    <div>
      <label>Scoring System:</label>
      <select id="scoringSystem" onchange="updateGroupDisplay()">
        <option value="avgPosition" ${scoringSystem === 'avgPosition' ? 'selected' : ''}>Average Position of Top X Drivers</option>
        <option value="champPoints" ${scoringSystem === 'champPoints' ? 'selected' : ''}>Total Championship Points</option>
      </select>
      <div id="topXInput" style="display: ${scoringSystem === 'avgPosition' ? 'block' : 'none'};">
        <label>Top Drivers: <input type="number" id="topX" min="1" value="${topX}" onchange="updateGroupDisplay()"/></label>
      </div>
    </div>
    <h3>Leaderboard</h3>
    <table id="leaderboard">
      <thead>
        <tr>
          <th>Group</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `;

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
        tableRows += `<tr>
          <td>#${c}</td><td>–</td><td>–</td>
        </tr>`;
      }
    });

    const avg = count ? (sum / count).toFixed(2) : 'N/A';
    const score = calculateGroupScore(cars, scoringSystem, topX);

    container.innerHTML += `
      <div class="group-box">
        <div><strong>${group}</strong> <button onclick="deleteGroup('${group}')">Delete</button></div>
        <div>Avg Position: ${avg}</div>
        <div>Score (${scoringSystem === 'avgPosition' ? 'Avg Top ' + topX : 'Champ Points'}): ${score}</div>
        <table>
          <thead><tr><th>Car</th><th>Driver</th><th>Pos</th></tr></thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>`;
  }

  // Reattach event listeners
  document.getElementById('scoringSystem').value = scoringSystem;
  document.getElementById('scoringSystem').addEventListener('change', updateGroupDisplay);
  document.getElementById('topX').addEventListener('change', updateGroupDisplay);
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

      row.insertCell().textContent = v.running_position ?? '—';
      row.insertCell().textContent = v.vehicle_number;
      const badgeCell = row.insertCell();
      const badge = document.createElement("img");
      badge.src = `https://cf.nascar.com/data/images/carbadges/1/${v.vehicle_number}.png`;
      badge.alt = "badge";
      badgeCell.appendChild(badge);
      row.insertCell().textContent = v.driver.full_name;
      row.insertCell().textContent = v.delta !== -1 ? `${v.delta.toFixed(3)}s` : '—';
      const pitCount = Array.isArray(v.pit_stops) ? v.pit_stops.length : 0;
      row.insertCell().textContent = pitCount;
      let lapsSincePit = '—';
      if (pitCount > 0 && v.laps_completed != null) {
        const lastPit = v.pit_stops[pitCount - 1];
        const lastPitLap = lastPit.pit_in_lap_count || 0;
        lapsSincePit = v.laps_completed - lastPitLap;
      }
      row.insertCell().textContent = lapsSincePit;
      let lapsLed = 0;
      if (Array.isArray(v.laps_led)) {
        v.laps_led.forEach(segment => {
          lapsLed += (segment.end_lap - segment.start_lap + 1);
        });
      }
      row.insertCell().textContent = lapsLed;
      row.insertCell().textContent = v.average_running_position?.toFixed(2) ?? '—';
    }

    updateGroupDisplay();
  } catch (err) {
    console.error("Fetch/display error:", err);
  }
}

setInterval(fetchAndDisplay, 1000);