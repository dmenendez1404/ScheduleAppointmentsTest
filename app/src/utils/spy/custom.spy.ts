class Spy {
    calls;
    constructor() {
        this.calls = 0;
        this.fn = this.fn.bind(this);
    }

    fn() {
        this.calls = this.calls + 1;
    }
}

export default new Spy();