// Check if user has a preferred color scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode on button click
document.getElementById('toggleDarkMode').addEventListener('click', function() {
    debugger
    document.body.classList.toggle('dark-mode');
});
