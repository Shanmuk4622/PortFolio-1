// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeModal");

// When the

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Optional: Handle form submission (you can customize this as needed)
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Message sent!"); // Replace this with actual form handling logic
    modal.style.display = "none"; // Close the modal after submission
}