const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchButton.addEventListener("click", performSearch);

function performSearch() {
  const query = searchInput.value;
  
  // Clear previous search results
  searchResults.innerHTML = "";
  
  // Perform search (you can fetch results from an API or use local data)
  const results = [
    "Result 1",
    "Result 2",
    "Result 3"
  ];
  
  // Display search results
  results.forEach(result => {
    const resultItem = document.createElement("div");
    resultItem.textContent = result;
    searchResults.appendChild(resultItem);
  });
}
