
class Checkout {
    constructor(rules) {
        this.basket = []
        this.rules = rules
        this.result = 0
        this.items2 = []
        this.hasDiscount = false
    }

    scan(item) {
        this.basket.push(item)
    }

    total() {
        this.basket.forEach(e => {   
            this.result += this.rules.table()[e]
        })

        this.result -= this.discountForA(this.basket) 
        this.result -= this.discountForB(this.basket)
        this.result -= this.discountForABC(this.basket)
        
        return this.result
    }

    discountForA(items){
        const discounts = Math.floor(items.join('').match(/A/g).length/3)
        const value = discounts * 20
        if(discounts > 0){
            this.hasDiscount = true   
        }
        return value
    }

    discountForB(items){
        const discounts =  Math.floor(items.join('').match(/B/g).length/2)
        const value = discounts * 15
        if(discounts > 0){
            this.hasDiscount = true
        }
        return value
    }

    discountForABC(items) {
        if (!this.hasDiscount && (items.includes('A') && items.includes('B') && items.includes('C'))) {
            return 5
        } else {
            return 0
        }
    }
}

module.exports = Checkout
