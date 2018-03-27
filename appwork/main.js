const { app, BrowserWindow, ipcMain } = require('electron');
const path = require ('path');
const fs = require('fs');
const os = require('os');

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

ipcMain.on('form-submission', function (event, numd) {
    console.log("this is the num of days from the form ->", (numd))
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
  
