
async function loadGSR() {
  try {
    const res = await fetch("https://api.metals.live/v1/spot");
    const data = await res.json();
    const gold = data.find(x => x.gold).gold;
    const silver = data.find(x => x.silver).silver;
    const gsr = (gold / silver).toFixed(2);
    document.getElementById("gsr").innerText = "Gold-Silver Ratio: " + gsr;
  } catch (e) {
    document.getElementById("gsr").innerText = "Failed to load GSR.";
  }
}

loadGSR();
