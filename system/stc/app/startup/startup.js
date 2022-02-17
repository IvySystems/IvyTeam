var {ipcRenderer} = require("electron");
var {ProgressbarAgent} = require("../../js/agent/progressbar-agent");

class Startup {

    static listenToUpdateStatus() {

        let progressBar = new ProgressbarAgent('ivy-startup-progressbar');
        let progressText = $('#ivy-startup-progress-text');


        var {ipcRenderer} = require('electron');
        ipcRenderer.on('updateMessage', function (event, object) {

            if (!object.hasOwnProperty('event')) {
                throw 'update object needs an event key';
            }

            let eventType = object['event'];
            switch (eventType) {
                case 'updater-disabled':
                    progressText.text('Update function only available with a built application');
                    progressBar.setProgress(100);

                    setTimeout(function () {
                        ipcRenderer.send('updateFinished');
                    }, 1000);

                    break;

            }

        });

    }

}

module.exports = {
    Startup,
}