class Checkout {
    constructor(rules) {
        this.items = []
        this.rules = rules
        this.result = 0
        this.items2 = []
    }

    scan(item) {
        this.items.push(item)
    }

    total() {
        this.items.forEach(e => {
            this.items2.push(e)
            this.result += this.rules.table()[e]
            let i = 0
            this.items2.forEach(ee => { if (ee == e) { i += 1 } })
            e == 'A' && i % 3 == 0 ? this.result -= 20 : e == 'B' && i % 2 == 0 ? this.result -= 15 : this.result
        })
        return this.result
    }
}

module.exports = Checkout
