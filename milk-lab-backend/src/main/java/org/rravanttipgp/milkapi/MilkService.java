package org.rravanttipgp.milkapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MilkService {
    @Autowired
    MilkRepository repo;

    public MilkService(){
    }

    public MilkService(MilkRepository repo) { this.repo = repo; }

    public MilkListDTO getAllMilks() {
        List<Milk> milks = repo.getAllMilks();
        return new MilkListDTO(milks.size(), milks);
    }

    public MilkListDTO seedDatabase(MilkListDTO seeds) {
        List<Milk> addedMilks = seeds.results().stream().map(milk -> repo.saveMilk(milk)).toList();
        return new MilkListDTO(addedMilks.size(), addedMilks);
    }
}
