const data = [
  { title: "First Blog Post", date: "2024-12-01" },
  { title: "Learning JavaScript", date: "2024-11-25" },
  { title: "Responsive Web Design", date: "2024-11-20" },
  { title: "Understanding CSS", date: "2024-10-15" }
];

function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  const filteredResults = data.filter(item => 
    item.title.toLowerCase().includes(query)
  );

  displayResults(filteredResults);
}

function applyFilter() {
  const sortBy = document.getElementById("sort").value;
  const resultsDiv = document.getElementById("results");
  let results = Array.from(resultsDiv.children);

  results.sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.dataset.date) - new Date(a.dataset.date);
    }
    return 0; // Default is relevance, which maintains the existing order
  });

  resultsDiv.innerHTML = ""; // Clear previous results
  results.forEach(result => resultsDiv.appendChild(result));
}

function displayResults(results) {
  const resultsDiv = document.getElementById("results");

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach(item => {
    const resultDiv = document.createElement("div");
    resultDiv.className = "result-item";
    resultDiv.dataset.date = item.date;
    resultDiv.innerHTML = `<strong>${item.title}</strong><br><small>${item.date}</small>`;
    resultsDiv.appendChild(resultDiv);
  });
}
