// Website loaded
console.log("Government Polytechnic Pune website loaded!");

// Navigation click message
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        alert("You clicked: " + this.textContent);
    });
});

