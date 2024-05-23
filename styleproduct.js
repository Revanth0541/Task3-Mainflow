// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').textContent = 'All fields are required.';
        document.getElementById('formMessage').style.color = 'red';
    } else {
        document.getElementById('formMessage').textContent = 'Thank you for contacting us!';
        document.getElementById('formMessage').style.color = 'green';
        // Optionally, send the form data to the server here.
    }
});
// Interactive Menu
document.querySelectorAll('nav ul li').forEach(function(menuItem) {
    menuItem.addEventListener('mouseenter', function() {
        var submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });

    menuItem.addEventListener('mouseleave', function() {
        var submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});
// Add to Cart Functionality
document.querySelectorAll('.product button').forEach(function(button) {
    button.addEventListener('click', function() {
        var productName = this.closest('.product').querySelector('h2').textContent;
        alert(productName + ' has been added to your cart!');
    });
});
