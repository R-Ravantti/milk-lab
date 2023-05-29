package org.rravanttipgp.milkapi;


import org.springframework.data.mongodb.repository.MongoRepository;

public interface MilkDbRepository extends MongoRepository<Milk, String> {
}
