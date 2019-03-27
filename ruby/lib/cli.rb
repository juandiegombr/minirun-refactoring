require_relative './checkout'
require_relative './pricing_rules'

print "Puts items to buy: "
goods = gets.chomp
checkout = Checkout.new(PricingRules.new)
goods.split(//).each { |item| checkout.scan(item) }
puts "Total price: #{ checkout.total }"
