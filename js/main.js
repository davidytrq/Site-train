// Wait for the button to exist in the HTML
document.addEventListener('DOMContentLoaded', () => {
    const myBtn = document.getElementById('myButton');

    if (myBtn) {
        myBtn.addEventListener('click', () => {
            // This changes the text of the button when clicked
            myBtn.innerText = "Sent! ❤️";
            
            // This shows a pop-up message
            alert("clicked 💀!");
            
            // Optional: Change the background color of the page
            document.body.style.backgroundColor = "#f0f8ff";
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('themeToggle');
    const body = document.body;

    // Check localStorage on page load to see if grey mode was active
    const isGreyMode = localStorage.getItem('theme') === 'grey';
    if (isGreyMode) {
        body.classList.add('grey-mode');
        toggleButton.textContent = 'Toggle White Mode'; // Change button text
    }

    // Add click event to the button
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            // Toggles the .grey-mode class on the <body>
            body.classList.toggle('grey-mode');

            // Check if the class is now active and store that preference
            if (body.classList.contains('grey-mode')) {
                localStorage.setItem('theme', 'grey');
                toggleButton.textContent = 'Toggle White Mode';
            } else {
                localStorage.setItem('theme', 'white');
                toggleButton.textContent = 'Toggle Grey Mode';
            }
        });
    }
});

