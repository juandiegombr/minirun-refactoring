class Checkout
  def initialize(rules)
    @items = []
    @rules = rules
    @result = 0
    @items2 = []
  end

  def scan(item)
    @items << item
  end

  def total
    @items.each do |e|
      @items2 << e
      @result += @rules.table[e]
      i = 0
      @items2.each { |ee| i += 1 if ee == e }
      e == 'A' && i % 3 == 0 ? @result -= 20 : e == 'B' && i % 2 == 0 ? @result -= 15 : @result
    end
    @result
  end
end
