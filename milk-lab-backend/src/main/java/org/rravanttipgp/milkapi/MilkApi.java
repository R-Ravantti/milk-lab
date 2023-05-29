package org.rravanttipgp.milkapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = {"org.rravanttipgp.milkapi"})
public class MilkApi {
    public static void main(String[] args) {
        SpringApplication.run(MilkApi.class, args);
    }
}
