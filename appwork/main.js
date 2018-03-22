const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
const {ipcMain} = require('electron')

let win  

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   })) 
}  

// Event handler for asynchronous incoming messages
ipcMain.on('form-submission', function (event, numd,nums) {
   console.log(numd)
   console.log(nums)
   event.sender.send('form-values', numd,nums)
   
});

app.on('ready', createWindow)