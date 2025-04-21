package com.example.dsSimulation.services;

import com.example.dsSimulation.model.HashMapEntry;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class HashMapService {

    private final Map<Integer, Integer> map = new HashMap<>();

    public List<HashMapEntry> put(int key, int value) {
        map.put(key, value);
        return getAll();
    }

    public List<HashMapEntry> remove(int key) {
        map.remove(key);
        return getAll();
    }

    public List<Integer> get(int key) {
        List<Integer> result = new ArrayList<>();
        if (map.containsKey(key)) {
            result.add(map.get(key));
        }
        return result;
    }

    public boolean containsKey(int key) {
        return map.containsKey(key);
    }

    public int size() {
        return map.size();
    }

    public List<HashMapEntry> getAll() {
        List<HashMapEntry> list = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            list.add(new HashMapEntry(entry.getKey(), entry.getValue()));
        }
        return list;
    }

    public List<String> getIterationSteps() {
        List<String> steps = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            steps.add("Key: " + entry.getKey() + " → Value: " + entry.getValue());
        }
        return steps;
    }
}
