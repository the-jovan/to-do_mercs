window.onload = function() {
  flipTemplate = `
<div id="JohnWick">
    ${today} <br/>
    Mercenary: John Wick<br/>
    Task: Avenge the Dog <br/>
    
    <button onClick = "(() => {
        var child = document.getElementById('JohnWick');
        newDiv.removeChild(child);
    })()">Finished</button>
</div>  
`  
        
    newDiv.insertAdjacentHTML("beforeend", flipTemplate);
    name.value = '';
    task.value = '';
};

let name = document.getElementById("nameBar");
let task = document.getElementById("task");

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


document.getElementById("button").addEventListener("click", flip);
document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault()
});

let newDiv = document.getElementById("newFiles");
let flipTemplate = '';

function flip() {
    if (name.value) {
        let x = Math.floor(Math.random()*1000);
        let identity = name.value.replace(/\W/g, x);
        console.log(identity);
        flipTemplate = `
<div id=${identity}>
    ${today} <br/>
    Mercenary: ${name.value}<br/>
    Task: ${task.value} <br/>
    
    <button onClick = "(() => {
        var child = document.getElementById('${identity}');
        newDiv.removeChild(child);
    })()">Finished</button>
</div>  
`  
        
    newDiv.insertAdjacentHTML("beforeend", flipTemplate);
    name.value = '';
    task.value = '';
    }
    
}


document.getElementById("looseEnds").addEventListener("click", split);
function split() {
    document.getElementById("looseEnds").style.display = "none"
    document.getElementById("yes").style.display = "block"
    document.getElementById("no").style.display = "block"
}
document.getElementById("yes").addEventListener("click", deleter);
function deleter() {
    setTimeout(()=> {newDiv.innerHTML=""}, 3000);
    newDiv.innerHTML="Mechanic has been sent."
    document.getElementById("looseEnds").style.display = "block"
    document.getElementById("yes").style.display = "none"
    document.getElementById("no").style.display = "none"
}
document.getElementById("no").addEventListener("click", defolt);
function defolt() {
    document.getElementById("looseEnds").style.display = "block"
    document.getElementById("yes").style.display = "none"
    document.getElementById("no").style.display = "none"
}
