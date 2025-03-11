const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("node:path");

// App settings
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

// Start the app
app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");

  createWindow();

  // Open a new window if none are open
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  console.log("--App started, come on in!");
});

// Closes all windows and stops the app on exit
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }

  console.log("--App closed, go do something good!");
});
