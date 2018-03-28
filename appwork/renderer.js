const fs = require('fs')

const ipcRenderer = require('electron').ipcRenderer;

var fileloc = "";
var numd = 0;
var nums = 0;

function sendForm(event) {
    event.preventDefault() // stop the form from submitting
	numd = document.getElementById("numd").value;
	nums = document.getElementById("nums").value;
	fileloc = document.getElementById("fileloc").value;
	fs.mkdirSync(fileloc+'/riep_content');
    ipcRenderer.send('form-submission', [numd,nums,fileloc])
	var parent = document.getElementById("center");
	var child = document.getElementById("classform");
	var cform = document.getElementById("contentform");
	cform.insertAdjacentHTML('beforeend','<button class="btn waves-effect waves-light" type="submit" id="btn2" name="action">Submit<i class="material-icons right">send</i></button>')
	parent.removeChild(child);
	document.getElementById("mainhead").innerHTML = "Step 3 - Copy to your custom file structure";
	document.getElementById("secondheader").innerHTML = "Copy content from your machine onto our portable USB drive seamlessly";
	var table = document.getElementById("classtable");
	for(var k = 0; k < parseInt(numd)+1; k++){
		var row = table.insertRow(k);
		if(k!=0){
			var foldername = '/'+'Day_'+k
			fs.mkdirSync(fileloc+'/riep_content'+foldername);
		}
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
				next_cell.innerHTML = "<input type='file' id=file" + (k*10+j).toString() + ">";
				subname = '/'+'Subject_'+j
				fs.mkdirSync(fileloc+'/riep_content'+foldername+subname);
			}
		}
	}
	
}
 function formCopy(event){
	event.preventDefault()
	//var elements = document.getElementsByTagName('input')[0].files[0].path;
	for(var d = 1; d <= numd; d++){
		for(var s = 1; s <= nums; s++){
			index = (d*10+s).toString();
			var next_path = (document.getElementById('file'+index).files[0].path).toString();
			var next_path_clean = next_path.replace(/\\/g,"/");
			var res = next_path.split(".");
			var file_ext = res[res.length - 1];
			var new_path = fileloc+"/riep_content/"+"Day_"+d+"/Subject_"+s+"/content"+index+"."+file_ext;
			fs.createReadStream(next_path_clean).pipe(fs.createWriteStream(new_path));
		}
		
	}
	ipcRenderer.send('content-submission', "Finished copying files!")
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
