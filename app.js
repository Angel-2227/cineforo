// ── SALA MAP GENERATOR ───────────────────────────────────────
// Layout:
//   Group LEFT:  4 columns × 6 rows = 24 seats
//   Group RIGHT: 3 columns × 6 rows = 18 seats
//   Total: 42 seats
//   At the bottom: entrance
//   At the top: tarima / pantalla

document.addEventListener("DOMContentLoaded", function () {
  buildSalaMap();
  initNavHighlight();
});

function buildSalaMap() {
  const map = document.getElementById("salaMap");
  if (!map) return;

  // Screen / tarima
  const screen = document.createElement("div");
  screen.className = "sala-screen";
  screen.textContent = "PANTALLA · TARIMA";
  map.appendChild(screen);

  const labelTarima = document.createElement("div");
  labelTarima.className = "sala-label-tarima";
  labelTarima.textContent = "↑  frente del salón  ↑";
  map.appendChild(labelTarima);

  // Seats container
  const seatsRow = document.createElement("div");
  seatsRow.className = "sala-seats";

  // Group LEFT (4 cols × 6 rows = 24 seats) — at the left as you enter
  const groupLeft = buildGroup(4, 6, "izq");
  seatsRow.appendChild(groupLeft);

  // Aisle
  const aisle = document.createElement("div");
  aisle.className = "sala-aisle";
  aisle.innerHTML = "<span>pasillo</span>";
  seatsRow.appendChild(aisle);

  // Group RIGHT (3 cols × 6 rows = 18 seats)
  const groupRight = buildGroup(3, 6, "der");
  seatsRow.appendChild(groupRight);

  map.appendChild(seatsRow);

  // Bottom: entrance
  const bottomWrap = document.createElement("div");
  bottomWrap.className = "sala-bottom";

  const entrance = document.createElement("div");
  entrance.className = "sala-entrance";
  entrance.textContent = "ENTRADA";
  bottomWrap.appendChild(entrance);

  const labelEntrance = document.createElement("div");
  labelEntrance.style.cssText = "font-family:var(--font-mono);font-size:0.6rem;color:var(--gray);letter-spacing:0.1em;text-align:center;margin-top:0.3rem;";
  labelEntrance.textContent = "↓  entrada al salón  ↓";
  bottomWrap.appendChild(labelEntrance);

  map.appendChild(bottomWrap);
}

function buildGroup(cols, rows, id) {
  const group = document.createElement("div");
  group.className = "seat-group";
  for (let r = 0; r < rows; r++) {
    const row = document.createElement("div");
    row.className = "seat-row";
    for (let c = 0; c < cols; c++) {
      const seat = document.createElement("div");
      seat.className = "seat";
      seat.title = `Fila ${r + 1}, columna ${c + 1} (${id})`;
      row.appendChild(seat);
    }
    group.appendChild(row);
  }
  return group;
}

// ── NAV HIGHLIGHT ON SCROLL ───────────────────────────────────
function initNavHighlight() {
  // simple smooth nav if needed in future
}
