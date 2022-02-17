var {app, BrowserWindow, ipcMain} = require('electron');
var {Gui} = require('./system/src/kernel/window/ui/gui');

class Index {

    static init() {

        app.appPath = app.getAppPath();

        this.loadListeners();
    }

    static loadListeners() {

        app.whenReady().then(function () {
            Gui.loadStartupWindow();
        });

        app.on('window-all-closed', function () {

        });

    }

    static #openWindow(window) {


    }

}

(function () {
    Index.init();
}());

