package org.rravanttipgp.milkapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MilkRepository {
    @Autowired
    MilkDbRepository repo;

    public MilkRepository() {
    }

    public MilkRepository(MilkDbRepository repo) {
        this.repo = repo;
    }

    public List<Milk> getAllMilks() { return Streamable.of(repo.findAll()).toList(); }

    public Milk getMilk(String id) { return repo.findById(id).orElse(null); }

    public Milk saveMilk(Milk milk) { return repo.save(milk); }
}
