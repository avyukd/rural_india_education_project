const { app, BrowserWindow, ipcMain} = require('electron');
//const {dialog} = require('electron').remote
const path = require ('path');
const os = require('os');
var fs = require('fs');

let window;

function createWindow(){
    window = new BrowserWindow({
        show: false
    });
    window.loadURL(`file://${__dirname}/index.html`);
    window.once('ready-to-show', function (){
        window.show();
    });
    let contents = window.webContents;
    window.on('closed', function() {
        window = null;
    });
	
}



ipcMain.on('form-submission', function (event, m) {
    console.log("this is the num of days and num of subjects from the form ->", (m))

	//window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
		//	fs.root.getDirectory('YESSSS IT WORKED', {create: true}, function(dirEntry) {}, errorHandler);}, errorHandler);
});

ipcMain.on('progress', function (event, m) {
    console.log("Checking progress: ", (m))

	//window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
		//	fs.root.getDirectory('YESSSS IT WORKED', {create: true}, function(dirEntry) {}, errorHandler);}, errorHandler);
});

ipcMain.on('content-submission', function (event, m) {
    console.log(m)
});

app.on('ready', function(){
    createWindow();
});





/*const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const ipcMain = require('electron').ipcMain

app.on('ready', () => {
  let win = new BrowserWindow({width: 800, height: 500});

  win.loadURL('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null;
  });

});

const {ipcMain} = require('electron')
  ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg)  // prints "ping"
    event.sender.send('asynchronous-reply', 'pong')
  })
  
  ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg)  // prints "ping"
    event.returnValue = 'pong'
  })
*/
/*const {ipcMain} = require('electron')
  ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg)  // prints "ping"
    event.sender.send('asynchronous-reply', 'pong')
  })
  
  ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg)  // prints "ping"
    event.returnValue = 'pong'
  })*/
  
