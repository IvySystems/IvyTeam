var {WindowController} = require('../windowController');
var {app, ipcMain} = require('electron');

var {Updater} = require(app.getAppPath() + '/system/src/kernel/update/updater');

class Gui {

    static getLayoutPath() {
        return '/system/src/kernel/window/layouts/';
    }

    static getStaticPath() {
        return '/system/stc/app/';
    }

    static loadStartupWindow() {

        let startupWindow = new WindowController(require(app.getAppPath() + this.getLayoutPath() + 'startupWindow.json'));
        startupWindow.loadContent(app.getAppPath() + this.getStaticPath() + 'startup/startup.html');
        startupWindow.openDevTools();

        let browserWindow = startupWindow.getBrowserWindow();
        browserWindow.webContents.once('dom-ready', function () {
            Updater.setWindow(browserWindow);
            Updater.loadListeners();
            Updater.checkForUpdates();
        });

        ipcMain.on('updateFinished', function () {
            Gui.onUpdateFinished();
        });

    }// https://github.com/ToqqleAbuse/IvyTeamV2/releases

    static onUpdateFinished() {

        var cmd = process.argv[1];

        console.log(cmd + " >")


    }

}

module.exports = {
    Gui,
}