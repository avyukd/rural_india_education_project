const ipcRenderer = require('electron').ipcRenderer;

function sendForm(event) {
    event.preventDefault() // stop the form from submitting
    let numd = document.getElementById("numd").value;
		let nums = document.getElementById("nums").value;
    ipcRenderer.send('form-submission', numd,nums)


}