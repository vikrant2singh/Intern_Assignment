let id
async function deleteData(id) {
    const response = await fetch('https://gorest.co.in/public-api/users/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eecb61f412d6f9e3ad1af58e024135346a5c2bd71d0dcc4975c09df5ff7182bd`
        },
        body: null
    });
    const data = await response.json();
    alert("User Deleted !...")
    window.location.reload();
};
