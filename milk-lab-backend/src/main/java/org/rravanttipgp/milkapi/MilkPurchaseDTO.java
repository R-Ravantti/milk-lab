package org.rravanttipgp.milkapi;

import com.fasterxml.jackson.annotation.JsonProperty;

public record MilkPurchaseDTO(@JsonProperty String id, @JsonProperty int amount) {
}
