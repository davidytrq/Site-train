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

