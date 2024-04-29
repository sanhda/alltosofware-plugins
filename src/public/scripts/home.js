$(document).ready(() => {
    $('#search-bar').keydown(function(event) {
        // Check if the key pressed is Enter (key code 13)
        if (event.which === 13) {
            const appName = $(this).val(); // Get the value from the input field
            const currentUrl = window.location.href;
            let newUrl;

            // Check if the current URL already has a query string
            if (currentUrl.includes('?')) {
                // If query string exists, check if 'appName' parameter already exists
                if (currentUrl.includes('appName=')) {
                    // If 'appName' parameter exists, replace its value
                    const regex = /appName=([^&]*)/i; // Regular expression to match 'appName' parameter
                    newUrl = currentUrl.replace(regex, `appName=${encodeURIComponent(appName)}`);
                } else {
                    // If 'appName' parameter doesn't exist, append it
                    newUrl = `${currentUrl}&appName=${encodeURIComponent(appName)}`;
                }
            } else {
                // If query string doesn't exist, add 'appName' parameter
                newUrl = `${currentUrl}?appName=${encodeURIComponent(appName)}`;
            }

            // Redirect to the new URL
            window.location.href = newUrl;
        }
    });
})
