var {BrowserWindow} = require('electron');

class WindowController {

    constructor(layout) {
        this.options = layout;
        this.browserWindow = new BrowserWindow(this.options);
    }

    getBrowserWindow() {
        return this.browserWindow;
    }

    getOptions() {
        return this.options;
    }


    setMinimumSize(width, height) {
        if (this.browserWindow) {
            this.browserWindow.setMinimumSize(width, height);
        }
    }

    setMaximumSize(width, height) {
        if (this.browserWindow) {
            this.browserWindow.setMaximumSize(width, height);
        }
    }

    openDevTools() {
        if (this.browserWindow) {
            this.browserWindow.webContents.openDevTools();
        }
    }

    loadContent(filePath) {
        let window = this.browserWindow;
        window.loadFile(filePath).then(function () {
            window.center();
        });
    }

}

module.exports = {
    WindowController,
}