function searchLaws() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    fetch(`/search?keyword=${encodeURIComponent(searchInput)}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                data.forEach(law => {
                    const lawElement = document.createElement('div');
                    lawElement.innerHTML = `<strong>${law.section}:</strong> ${law.description}`;
                    resultsDiv.appendChild(lawElement);
                });
            } else {
                resultsDiv.innerHTML = 'No results found.';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultsDiv.innerHTML = 'An error occurred while fetching results.';
        });
}
