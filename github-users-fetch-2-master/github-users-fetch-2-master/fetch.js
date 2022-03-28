// Your code here
document.querySelector("form").addEventListener("submit", async function(e){
    e.preventDefault();
    let nombre = document.getElementById("githubuser").value;
    const response = await fetch(`https://api.github.com/users/${nombre}`);
    const usuaris = await response.json();
    console.log(usuaris);
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    td.innerHTML = usuaris.login;
    tr.appendChild(td);
    
    var td = document.createElement("td");
    var img = document.createElement("img");
    img.src = usuaris.avatar_url;
    td.appendChild(img);
    tr.appendChild(td);

    var td = document.createElement("td");
    td.innerHTML = usuaris.bio;
    tr.appendChild(td);

    var td = document.createElement("td");
    var a = document.createElement("a");
    a.innerHTML = "Página del Usuario";
    a.href = usuaris.html_url;
    td.appendChild(a)
    tr.appendChild(td);

    
    
    document.getElementById("myTable").appendChild(tr);
    
})

