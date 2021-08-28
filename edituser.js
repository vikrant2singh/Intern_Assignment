let id = ''
window.onload = ()=>{
     id = localStorage.getItem('id');
    const api_url = "https://gorest.co.in/public-api/users/"+id;
    async function getapi(api_url) {
        const response = await fetch(api_url);
        var data1 = await response.json();
        document.getElementById('efirstname').value = data1.data.name;
        document.getElementById('eemail').value = data1.data.email;
        document.getElementById("userid").innerHTML=data1.data.id;
        document.getElementById("usmail").innerHTML=data1.data.email;
        document.getElementById('usname').innerHTML=data1.data.name;
        document.getElementById('usgender').innerHTML=data1.data.gender;
        document.getElementById('usstatus').innerHTML=data1.data.status;
    }
    getapi(api_url)  
}
const thisForm = document.getElementById('emyForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    let gender = ''
    if (document.getElementById('emale').checked) {
        gender = 'male'
    } else {
        gender = 'female'
    }
    let status = ''
    if (document.getElementById('estatus').value == 'active') {
        status = 'active'
    } else {
        status = 'inactive'
    }
    const formData = {
        'name': document.getElementById('efirstname').value,
        'gender': gender,
        'email': document.getElementById('eemail').value,
        'status': status
    }
    const response = await fetch('https://gorest.co.in/public-api/users/'+id, {
        body: JSON.stringify(formData),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eecb61f412d6f9e3ad1af58e024135346a5c2bd71d0dcc4975c09df5ff7182bd`
        }
    });

    const result = await response.json();
    if (result.code == 200) {
        

        alert("User Edited");
        window.location.href = "./index.html";
    }
    else {
        alert("ERROR")
    }

})

