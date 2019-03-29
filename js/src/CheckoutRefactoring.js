const DISCOUNT_FOR_A = 20
const QUANTITY_OF_A_FOR_DISCOUNT = 3
const DISCOUNT_FOR_B = 15
const QUANTITY_OF_B_FOR_DISCOUNT = 2

class Checkout {
    constructor(rules) {
        this.basket = []
        this.rules = rules
        this.discount = 0
    }

    scan(item) {
        this.basket.push(item)
    }

    getPrice (item) {
        return this.rules.table()[item]
    }

    total() {
        const initialPrice = 0
        const sumItemPrices = (prev, cur) => prev + cur
        
        let totalPrice = this.basket
            .map(item => this.getPrice(item))
            .reduce(sumItemPrices, initialPrice)

        this.applyDiscounts()

        return totalPrice - this.discount
    }

    getQuantityOfType (type) {
        const items = this.basket.filter(item => item === type)
        return items.length
    }

    discountForA(){
        const quantityOfA = this.getQuantityOfType('A')
        const quantityOfDiscounts = Math.floor(quantityOfA / QUANTITY_OF_A_FOR_DISCOUNT)
        this.discount += quantityOfDiscounts * DISCOUNT_FOR_A
    }
    
    discountForB(){
        const quantityOfB = this.getQuantityOfType('B')
        const quantityOfDiscounts = Math.floor(quantityOfB / QUANTITY_OF_B_FOR_DISCOUNT)
        this.discount += quantityOfDiscounts * DISCOUNT_FOR_B
    }

    discountForABC() {
        const mandatoryProductsForDiscount = ['A', 'B', 'C']
        const containsTheProduct = product => this.basket.includes(product)
        const containsAll = mandatoryProductsForDiscount.every(containsTheProduct)
        
        if (containsAll && this.discount === 0) {
            this.discount = 5
        }
    }

    applyDiscounts () {
        this.discountForA() 
        this.discountForB()
        this.discountForABC()
    }
}

module.exports = Checkout
