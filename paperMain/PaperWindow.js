//主窗体

//base
let { BrowserWindow } = require('electron');

//main
class PaperWindow {
    constructor(options) {
        options.frame = false;
        this.browserWindow = new BrowserWindow(options);
    }
    load(url) {
        this.browserWindow.loadURL(url);
    }
    openDev() {
        this.browserWindow.webContents.openDevTools();
    }
    on() {
        this.browserWindow.on(...arguments);
    }
    close() {
        this.browserWindow.close();
    }
}

//exports
module.exports = PaperWindow;
