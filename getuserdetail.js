let get_url = 1
let lastpage
let firstpage
async function getapi(url) {
	const response = await fetch("https://gorest.co.in/public-api/users?page=" + url);
	var data1 = await response.json();
	if (response) {
		hideloader();
	}
	lastpage = data1.meta.pagination.pages;
	frstpage = data1.meta.pagination.page;
	show(data1);
}
getapi(get_url);
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

function show(data1) {
	let tab =
		`<tr>
		<th>#</th>
		<th>Name</th>
		<th>Action</th>
		</tr>`;
	let index = 0;
	for (let r of data1.data) {
		index++;
		tab += `<tr>
					<td>${index}</td>
					<td>${r.name} </td>
					<td>
						<button onclick=showId(${r.id});> Show</button>
						<button onclick=userId(${r.id})> Edit</button>
						<button onclick='deleteData(${r.id});'> Delete</button>
	
					</td>
	
				</tr>`;
	}
	document.getElementById("employees").innerHTML = tab;
}
function userId(id) {
	localStorage.setItem('id', id);
	location.href = './edituser.html'
}
function showId(id) {
	localStorage.setItem('id', id);
	location.href = './showuser.html'
}

function nxt() {
	if (get_url == lastpage) {
		alert("you are on last page");
	}
	else {
		get_url++;
		getapi(get_url)
		document.getElementById("3").innerHTML = get_url + 2;
		document.getElementById("2").innerHTML = get_url + 1;
		document.getElementById("1").innerHTML = get_url;
	}
}
function prev() {
	if (get_url == 1) {
		alert("you are on first page")
	}
	else {
		get_url--;
		getapi(get_url);
		document.getElementById("1").innerHTML = get_url;
		document.getElementById("2").innerHTML = get_url + 1;
		document.getElementById("3").innerHTML = get_url + 2;
	}
}