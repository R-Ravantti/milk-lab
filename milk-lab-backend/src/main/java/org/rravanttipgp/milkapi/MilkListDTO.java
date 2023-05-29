package org.rravanttipgp.milkapi;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Arrays;
import java.util.List;

public record MilkListDTO(@JsonProperty int count, @JsonProperty List<Milk> results) {
}
