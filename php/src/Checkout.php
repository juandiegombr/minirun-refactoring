<?php

namespace Checkout;

use Checkout\PricingRules;

class Checkout {
    public function __construct(PricingRules $rules) {
    }

    public function scan($item) {
    }

    public function total() {
        return 0;
    }
}
