document.addEventListener("DOMContentLoaded", function() {
    var enrollBtn = document.getElementById("enrollBtn");
    var enrollBox = document.getElementById("enrollBox");

    enrollBtn.addEventListener("click", function() {
        if (enrollBox.style.display === "none" || enrollBox.style.display === "") {
            enrollBox.style.display = "block";
        } else {
            enrollBox.style.display = "none";
        }
    });
});