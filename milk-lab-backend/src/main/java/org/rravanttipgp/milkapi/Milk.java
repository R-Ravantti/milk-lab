package org.rravanttipgp.milkapi;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document
public class Milk {
    private String name;

    private String type;

    private int storage;

    @Id
    private String id;

    public Milk(String name, String type, int storage, String id) {
        this.name = name;
        this.type = type;
        this.storage = storage;
        this.id = id;
    }

    public int getStorage() {
        return storage;
    }

    public void setStorage(int storage) {
        this.storage = storage;
    }
}
