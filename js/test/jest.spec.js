const Checkout = require('../src/CheckoutRefactoring')
const PricingRules = require('../src/PricingRules')

const getTotalPrice = (items) => {
  const checkout = new Checkout(new PricingRules())
  items.split('').forEach(item => { checkout.scan(item) })
  return checkout.total()
}

describe('Jest', () => {
  
  test('AB', () => {
    const totalPrice = getTotalPrice('AB')
    expect(totalPrice).toEqual(80)
  })
  test('AA', () => {
    const totalPrice = getTotalPrice('AA')
    expect(totalPrice).toEqual(100)
  })
  test('AAA', () => {
    const totalPrice = getTotalPrice('AAA')
    expect(totalPrice).toEqual(130)
  })
  test('CDBA', () => {
    const totalPrice = getTotalPrice('CDBA')
    expect(totalPrice).toEqual(110)
  })
  test('AAAA', () => {
    const totalPrice = getTotalPrice('AAAA')
    expect(totalPrice).toEqual(180)
  })
  test('AAAB', () => {
    const totalPrice = getTotalPrice('AAAB')
    expect(totalPrice).toEqual(160)
  })
  test('AAABB', () => {
    const totalPrice = getTotalPrice('AAABB')
    expect(totalPrice).toEqual(175)
  })
  test('AAAAA', () => {
    const totalPrice = getTotalPrice('AAAAA')
    expect(totalPrice).toEqual(230)
  })
  test('DABABA', () => {
    const totalPrice = getTotalPrice('DABABA')
    expect(totalPrice).toEqual(190)
  })
  test('AAAAAA', () => {
    const totalPrice = getTotalPrice('AAAAAA')
    expect(totalPrice).toEqual(260)
  })
  test('AAAABBD', () => {
    const totalPrice = getTotalPrice('AAAABBD')
    expect(totalPrice).toEqual(240)
  })


  test('ABCD', () => {
    const totalPrice = getTotalPrice('ABCD')
    expect(totalPrice).toEqual(110)
  })
  test('ABC', () => {
    const totalPrice = getTotalPrice('ABC')
    expect(totalPrice).toEqual(95)
  })
  test('AAABC', () => {
    const totalPrice = getTotalPrice('AAABC')
    expect(totalPrice).toEqual(180)
  })

})
