const ipcRenderer = require('electron').ipcRenderer;

function sendForm(event) {
    event.preventDefault() // stop the form from submitting
    let numd = document.getElementById("numd").value;
	let nums = document.getElementById("nums").value;
    ipcRenderer.send('form-submission', [numd,nums])
	var parent = document.getElementById("center");
	var child = document.getElementById("classform");
	var cform = document.getElementById("contentform");
	cform.insertAdjacentHTML('afterend','<button class="btn waves-effect waves-light" type="submit" id="btn2" name="action">Submit<i class="material-icons right">send</i>')
	parent.removeChild(child);
	document.getElementById("mainhead").innerHTML = "Step 3 - Copy to your custom file structure";
	document.getElementById("secondheader").innerHTML = "Copy content from your machine onto our portable USB drive seamlessly";
	var table = document.getElementById("classtable");
	for(var k = 0; k < parseInt(numd)+1; k++){
		var row = table.insertRow(k);
		for(var j = 0; j < parseInt(nums)+1; j++){
			var next_cell = row.insertCell(j);
			if(j==0 && k!=0){
				next_cell.innerHTML = "Day "+k;
			}
			else if(k==0 && j==0){
				next_cell.innerHTML = "---";
			}
			else if(j!=0 && k==0){
				next_cell.innerHTML = "Subject "+j;
			}
			else{
				next_cell.innerHTML = "<input type='file' id=file" + (k*j).toString() + ">";
			}
		}
	}
}
 function formCopy(event){
	 event.preventDefault()
	 ipcRenderer.on('reply', (event, arg) => {
    console.log(arg) // prints "pong"
  })
	 
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
