const thisForm = document.getElementById('myForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    let gender = ''
    if (document.getElementById('male').checked) {
        gender = 'male'
    } else {
        gender = 'female'
    }
    let status = ''
    if (document.getElementById('status').value == 'active') {
        status = 'active'
    } else {
        status = 'inactive'
    }
    const formData = {
        'name': document.getElementById('firstname').value,
        'gender': gender,
        'email': document.getElementById('email').value,
        'status': status
    }
    const response = await fetch('https://gorest.co.in/public-api/users', {
        body: JSON.stringify(formData),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eecb61f412d6f9e3ad1af58e024135346a5c2bd71d0dcc4975c09df5ff7182bd`
        }
    });

    const result = await response.json();
    if (result.code == 201) {
        alert("User Created with ID " + result.data.id)
        window.location.href = "./index.html";
    }
    else {
        alert("ERROR")
    }

})