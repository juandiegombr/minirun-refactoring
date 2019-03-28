<?php

namespace Checkout;

use Checkout\PricingRules;

class Checkout {
    private $rules;

    public function __construct(PricingRules $rules) {
        $this->items = [];
        $this->rules = $rules;
        $this->items2 = [];
        $this->result = 0;
    }

    public function scan(String $item) {
        $this->items[] = $item;
    }

    public function total() {
        foreach($this->items as $e) {
            $this->items2[] = $e;
            $this->result += $this->rules->table()[$e];
            $i = 0;
            foreach($this->items2 as $ee) { if ($ee == $e) $i += 1; }
            $e == 'A' && $i % 3 == 0 ? $this->result -= 20 : ($e == 'B' && $i % 2 == 0 ? $this->result -= 15 : $this->result);
        }
        return $this->result;
    }
}
