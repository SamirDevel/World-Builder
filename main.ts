import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow() {
    // Crear una ventana de navegador
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Si necesitas un archivo preload
            contextIsolation: true,
            //enableRemoteModule: false,
        },
    });

    // Cargar el archivo HTML en la ventana
    mainWindow.loadFile(path.join(__dirname, 'apps','client','out','index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});