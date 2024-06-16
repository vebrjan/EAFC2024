document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'your-server-endpoint', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('successMessage').classList.remove('hidden');
            document.getElementById('contactForm').reset();
        }
    };

    xhr.send(JSON.stringify({
        name: name,
        email: email,
        message: message
    }));
});
