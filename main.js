const electron = require("electron");
const { app, BrowserWindow } = require("electron");
require("./src/index");

// Variable global para crear ventana
let win

// Función principal
function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true
        }
    });

    win.loadURL('http://localhost:3000');
    win.on('close', event => {
        win = null;
    });
}

app.on('ready', createWindow);