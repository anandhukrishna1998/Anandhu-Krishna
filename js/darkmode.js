document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const icon = darkModeToggle.querySelector('i');
    
    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    
    // Function to enable dark mode
    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        icon.textContent = 'dark_mode';  // Material icon for moon
        localStorage.setItem('darkMode', 'enabled');
    };
    
    // Function to disable dark mode
    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        icon.textContent = 'light_mode';  // Material icon for sun
        localStorage.setItem('darkMode', null);
    };
    
    // Initialize dark mode based on saved preference
    if (darkMode === 'enabled') {
        enableDarkMode();
    }
    
    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});