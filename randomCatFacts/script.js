const api = "https://meowfacts.herokuapp.com/"

// Event listener for the get random cat facts button click
document.getElementById('factBtn').addEventListener('click', getCatFact);

// Function to fetch a random cat fact
function getCatFact() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            updateCatFact(data.data) // Update the facts display
        })
        .catch(error => {
            console.error('Error fetching cat fact:', error)
            const errorDisplay = document.getElementById('error-display')
            errorDisplay.style.display = 'block'
        })
}

// Function to update the fact display
function updateCatFact(fact) {
    document.getElementById('factText').innerText = fact;
}

