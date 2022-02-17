var {autoUpdater} = require("electron-updater");

class Updater {

    static setWindow(window) {
        this.window = window;
    }

    static #sendStatus(statusObject) {

        if (!this.window) {
            throw 'It is imperative that a window is specified to which the listener events are passed.';
        }

        let window = this.window;
        window.webContents.send('updateMessage', statusObject);

    }

    static checkForUpdates() {

        if (autoUpdater.isUpdaterActive()) {
            autoUpdater.checkForUpdatesAndNotify().then(function () {
                Updater.#sendStatus({
                    event: 'check-for-updates-and-notify',
                });
            });
        } else {
            Updater.#sendStatus({
                event: 'updater-disabled',
            });
        }

    }

    static loadListeners() {

        autoUpdater.on('checking-for-update', function () {
            Updater.#sendStatus({
                event: 'checking-for-update',
            });
        });

        autoUpdater.on('update-available', function () {
            Updater.#sendStatus({
                event: 'update-available',
            });
        });

        autoUpdater.on('update-not-available', function () {
            Updater.#sendStatus({
                event: 'update-not-available',
            });
        });

        autoUpdater.on('error', function (error) {
            Updater.#sendStatus({
                event: 'error',
                error: error,
            })
        });

        autoUpdater.on('download-progress', function (progress) {
            Updater.#sendStatus({
                event: 'download-progress',
                speed: progress.bytesPerSecond,
                progress: progress.percent,
                transferred: progress.transferred,
                total: progress.total,
            });
        });


        autoUpdater.on('update-downloaded', function () {
            Updater.#sendStatus({
                event: 'update-downloaded',
            });
        });

    }

}

module.exports = {
    Updater,
}