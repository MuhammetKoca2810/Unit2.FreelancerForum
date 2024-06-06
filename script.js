document.addEventListener("DOMContentLoaded", () => {
  const freelancerList = document.getElementById("freelancer-list");
  const averagePriceElement = document.getElementById("average-price");
  const names = [
    "Dr. Slice",
    "Dr.  Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose",
  ];
  const occupations = ["Gardener", "Programmer", "Teacher", "Driver"];

  const freelancers = [
    { name: "Dr. Slice", occupation: "Gardener", startingPrice: 25 },
    { name: "Dr. Pressure", occupation: "Programmer", startingPrice: 51 },
    { name: "Prof. Possibility", occupation: "Teacher", startingPrice: 43 },
    { name: "Prof. Prism", occupation: "Teacher", startingPrice: 81 },
    { name: "Dr. Impulse", occupation: "Teacher", startingPrice: 43 },
    { name: "Prof. Spark", occupation: "Programmer", startingPrice: 76 },
    { name: "Dr. Wire", occupation: "Teacher", startingPrice: 47 },
    { name: "Prof. Goose", occupation: "Driver", startingPrice: 72 },
  ];

  function renderFreelancers() {
    freelancerList.innerHTML = "";

    for (let i = 0; i < freelancers.length; i++) {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${freelancers[i].name}</td>
        <td>${freelancers[i].occupation}</td>
        <td>${freelancers[i].startingPrice}</td>`;
      freelancerList.appendChild(row);
    }
    updateAveragePrice();
  }
  function updateAveragePrice() {
    let total = 0;
    for (let i = 0; i < freelancers.length; i++) {
      total += freelancers[i].startingPrice;
    }
    let average = total / freelancers.length;
    averagePriceElement.textContent = `Average Starting Price: $${average.toFixed(
      2
    )}`;
  }
  function addRandomFreelancer() {
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomOccupation =
      occupations[Math.floor(Math.random() * occupations.length)];
    let randomPrice = Math.floor(Math.random() * 100) + 20;

    freelancers.push({
      name: randomName,
      occupation: randomOccupation,
      startingPrice: randomPrice,
    });
    renderFreelancers();
  }
  renderFreelancers();

  const intervalId = setInterval(addRandomFreelancer, 5000);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped adding new freelancers");
  }, 60000);
});
