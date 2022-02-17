var {Agent} = require("./agent");

class ProgressbarAgent extends Agent {

    constructor(id) {
        super(id);

        this.init();
    }

    init() {

        $('#' + this.getId()).html(`
            <div class="ivy_pb_progressbar" id="ivy_pb_progressbar_${this.getElementId()}">
                <div class="ivy_pb_progressbar_progress" id="ivy_pb_progressbar_progress_${this.getElementId()}"></div>    
            </div>
        `);

    }

    setProgress(progress) {

        if (progress < 0 || progress > 100) {
            throw 'Process value must be between 0 and 100';
        }

        $(`#ivy_pb_progressbar_progress_${this.getElementId()}`).css('width', (progress + '%'));

    }


}

module.exports = {
    ProgressbarAgent,
}