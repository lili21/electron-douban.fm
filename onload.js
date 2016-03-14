'use strict';

const ipcRenderer = require('electron').ipcRenderer;

onload = function() {
  const webview = document.querySelector('webview');

  ipcRenderer.on('nextSong', function() {
    webview.executeJavaScript('doubanfm$.nextSong()');
  });

  ipcRenderer.on('playPause', function() {
    webview.executeJavaScript('doubanfm$.playPause()');
  });

  ipcRenderer.on('like', function() {
    webview.executeJavaScript('doubanfm$.like()');
  });

  ipcRenderer.on('trash', function() {
    webview.executeJavaScript('doubanfm$.trash()');
  });

  doLayout();
};


function doLayout() {
  var container = document.querySelector('#webview-container');
  var webview = document.querySelector('webview');
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;
  var webviewWidth = windowWidth;
  var webviewHeight = windowHeight;
  var scrollbarWidth = getScrollbarWidth();
  container.style.width = webview.style.width = webviewWidth - scrollbarWidth + 'px';
  container.style.height = webview.style.height = webviewHeight + 'px';
}

function getScrollbarWidth() {
  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = "scroll";

  // add innerdiv
  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
}
