fetch("events.json")
    .then(response => response.json())
    .then(data => {
        new Vue({
            el: "#app", // Make sure your HTML has a wrapping div with id="app"
            data: {
                events: data
            }
        });
    })
    .catch(error => console.error("Error loading events:", error));