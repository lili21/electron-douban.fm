'use strict';

const electron = require('electron');

const app = electron.app;

app.commandLine.appendSwitch(
  'ppapi-flash-path',
  '/Applications/Google Chrome.app/Contents/Versions/48.0.2564.116/Google Chrome Framework.framework/Internet Plug-Ins/PepperFlash/PepperFlashPlayer.plugin'
);

app.commandLine.appendSwitch('ppapi-flash-version', '20.0.0.306');

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});

let mainWindow;

function createWindow() {
  mainWindow = new electron.BrowserWindow({
    // fullscreen: true,
    title: 'douban.fm',
    width: 1200,
    height: 600,
    'web-preferences': { 'plugins': true }
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}
