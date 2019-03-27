<?php

require_once 'vendor/autoload.php';

use Checkout\Checkout;
use Checkout\PricingRules;

print "Puts items to buy: ";
$goods = fgets(STDIN);
$checkout = new Checkout(new PricingRules());
foreach(str_split($goods) as $item) {
    $checkout->scan($item);
}
$total = $checkout->total();
print "Total price: $total\n";
