const ipcRenderer = require('electron').ipcRenderer;

function sendForm(event) {
    event.preventDefault() // stop the form from submitting
    let firstname = document.getElementById("firstname").value;
    ipcRenderer.send('form-submission', firstname)
	document.getElementById("test").innerHTML = "working";
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
