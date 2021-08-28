let id = ''
window.onload = () => {
    id = localStorage.getItem('id');
    const user_url = "https://gorest.co.in/public-api/users/" + id;
    async function showUser(url) {
        const response = await fetch(url);
        var data1 = await response.json();
        document.getElementById("showid").innerHTML = data1.data.id;
        document.getElementById("showmail").innerHTML = data1.data.email;
        document.getElementById('showname').innerHTML = data1.data.name;
        document.getElementById('showgender').innerHTML = data1.data.gender;
        document.getElementById('showstatus').innerHTML = data1.data.status;
    }
    showUser(user_url);
}

