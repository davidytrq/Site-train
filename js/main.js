document.addEventListener('DOMContentLoaded', () => {
    // Like button functionality
    const likeBtns = document.querySelectorAll('.like-btn');
    
    likeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.transform = "scale(1.3)";
            setTimeout(() => btn.style.transform = "scale(1)", 200);
            btn.innerText = (btn.innerText === "❤️") ? "🤍" : "❤️";
        });
    });

    // Theme Toggle
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('grey-mode');
    });
});
	
