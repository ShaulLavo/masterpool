
(function () {

    function setTheme(newTheme) {
        window.__theme = newTheme;
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (newTheme === 'light') {
            document.documentElement.classList.remove('dark');
        }
    }

    var preferredTheme;
    try {
        preferredTheme = localStorage.getItem('masterPool_Theme') ?? localStorage.getItem('theme');
    } catch { console.error('Failed to get theme from localStorage'); }

    window.__setPreferredTheme = function (newTheme) {
        preferredTheme = newTheme;
        setTheme(newTheme);
        try {
            localStorage.setItem('theme', newTheme);
        } catch { }
    };


    setTheme(preferredTheme);

    // Detect whether the browser is Mac to display platform specific content
    // An example of such content can be the keyboard shortcut displayed in the search bar
    document.documentElement.classList.add(
        window.navigator.platform.includes('Mac')
            ? "platform-mac"
            : "platform-win"
    );
})();
