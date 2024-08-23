document.getElementById('toggle-btn').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');

    if (navbar.classList.contains('show')) {
        navbar.style.maxHeight = navbar.scrollHeight + "px";
    } else {
        navbar.style.maxHeight = null;
    }
});