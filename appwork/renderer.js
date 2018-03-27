const ipcRenderer = require('electron').ipcRenderer;

function sendForm(event) {
    event.preventDefault() // stop the form from submitting
    let numd = document.getElementById("numd").value;
    ipcRenderer.send('form-submission', numd)
	var parent = document.getElementById("center");
	var child = document.getElementById("classform");
	parent.removeChild(child);
	document.getElementById("mainhead").innerHTML = "Step 3 - Copy to your custom file structure";
	document.getElementById("secondheader").innerHTML = "Copy content from your machine onto our portable USB drive seamlessly";
	
	var table = document.getElementById("classtable");
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";
	parent.appendChild(para);
}


/*const {ipcRenderer} = require('electron')
  console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
  
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg) // prints "pong"
  })
  ipcRenderer.send('asynchronous-message', 'ping')*/
/*function getData(){
	console.log("worked");
	
}
document.querySelector('#btn').addEventListener('click', getData)

/*var downloadButton;
const {remote} = require('electron');
//const {ipcRenderer} = require('electron')
const fs = require("fs");
onload = function() {
  downloadButton = document.getElementById("btn");
 console.log("here")
  downloadButton.addEventListener("click", handleDownload);
};

function handleDownload(){
	console.log("working")
	document.getElementById("mainhead").innerHTML = 'working'
}*/

/*
function sendForm(event) {
	mainWindow.loadUrl('/addcontent.html');
	mainWindow.webContents.on('did-finish-load', ()=>{
    let code = `console.log('clicked');`;
    mainWindow.webContents.executeJavaScript(code);
});
}
*/
