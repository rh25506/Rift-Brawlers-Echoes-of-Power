const fighters = [
  "Chrono Knight – A warrior forged in time loops, armed with a blade that cuts causality.",
  "Code Wraith – A sentient algorithm that manipulates physics and logic.",
  "Extinction Shaman – Wielder of primal forces; commands meteor showers and vanished beasts.",
  "Rebel AI – A rogue synthetic intelligence in a cloned body with cybernetic disruption skills.",
  "Janitor Prime – A humble custodian turned paradox master, bending time with each strike."
];

function revealFighter() {
  const randomFighter = fighters[Math.floor(Math.random() * fighters.length)];
  document.getElementById("output").textContent = `You have been summoned as: ${randomFighter}`;
}
