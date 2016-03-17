'use strict';

const electron = require('electron');

// const ipcRenderer = electron.ipcRenderer;

const app = electron.app;

const globalShortcut = electron.globalShortcut;

let mainWindow;

app.commandLine.appendSwitch(
  'ppapi-flash-path',
  '/Applications/Google Chrome.app/Contents/Versions/48.0.2564.116/Google Chrome Framework.framework/Internet Plug-Ins/PepperFlash/PepperFlashPlayer.plugin'
);

app.commandLine.appendSwitch('ppapi-flash-version', '20.0.0.306');

app.on('ready', function() {
  globalShortcut.register('MediaNextTrack', function() {
    // 下一首
    mainWindow.webContents.send('nextSong');
  });

  globalShortcut.register('MediaPlayPause', function() {
    // 播放/暂停
    mainWindow.webContents.send('playPause');
  });

  globalShortcut.register('Cmd + L', function() {
    // 喜欢
    mainWindow.webContents.send('like');
  });
  /*
  globalShortcut.register('Cmd + T', function() {
    // 垃圾桶
    mainWindow.webContents.send('trash');
  });*/

  createWindow();
});

app.on('will-quit', function() {
  globalShortcut.unregisterAll();
  // ipcRenderer.removeAllListeners();
});

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


function createWindow() {
  mainWindow = new electron.BrowserWindow({
    // fullscreen: true,
    width: 1200,
    height: 600,
    'web-preferences': { 'plugins': true },
    title: 'douban.fm',
    icon: __dirname + '/douban-fm.png'
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}
