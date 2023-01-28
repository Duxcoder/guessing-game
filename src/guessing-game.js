class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.number = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.number = this.search();
    }
    
    search() { return Math.round((this.max + this.min) / 2)}

    guess() {
       return this.number
    }

    lower() {
        this.max = this.number
        this.number = this.search()
    }

    greater() {
        this.min = this.number
        this.number = this.search()
    }
}

module.exports = GuessingGame;
