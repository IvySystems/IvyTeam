class Agent {

    constructor(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    getElementId() {

        if (this.className) {
            return this.className;
        } else {
            this.className = (Math.floor(Math.random() * 99999) + Date.now()).toString(16);
            return this.className;
        }

    }

}

module.exports = {
    Agent,
}