const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (process.env.NODE_ENV !== 'development') {
    win.loadFile(`${__dirname}/renderer/dist/index.html`);
  } else {
    win.loadURL('http://localhost:4500/');
  }

  ipcMain.handle('minimize', () => {
    win.minimize()
  })
  ipcMain.handle('maximize', () => {
    win.isMaximized() ? win.unmaximize() : win.maximize();
  })
  ipcMain.handle('close', () => {
    win.close()
    app.exit()
  })
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

