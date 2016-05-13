const { app } = require('electron');
let PaperWindow = require('./paperMain/PaperWindow');
let win;

function createWindow() {
    //生成PaperWindow
    win = new PaperWindow({
        width: 'auto',
        height: 'auto'
    });

    win.load('file://' + __dirname + '/index.html');

    // win.openDev();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

//兼容macosx操作
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
