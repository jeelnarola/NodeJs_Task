// script.js
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Send the form data to the server using an HTTP request (e.g., AJAX or fetch)
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally, display a success message to the user
    })
    .catch(error => {
        console.error('Error:', error);
        // Optionally, display an error message to the user
    });
}
