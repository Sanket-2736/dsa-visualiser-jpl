package com.example.dsSimulation.controllers;

import com.example.dsSimulation.model.HashMapEntry;
import com.example.dsSimulation.services.HashMapService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hashmap")
@CrossOrigin(origins = "http://localhost:5173")
public class HashMapController {

    private final HashMapService hashMapService;

    public HashMapController(HashMapService hashMapService) {
        this.hashMapService = hashMapService;
    }

    @PostMapping("/put")
    public List<HashMapEntry> put(@RequestParam int key, @RequestParam int value) {
        return hashMapService.put(key, value);
    }

    @DeleteMapping("/remove/{key}")
    public List<HashMapEntry> remove(@PathVariable int key) {
        return hashMapService.remove(key);
    }

    @GetMapping("/get/{key}")
    public List<Integer> get(@PathVariable int key) {
        return hashMapService.get(key);
    }

    @GetMapping("/contains/{key}")
    public boolean contains(@PathVariable int key) {
        return hashMapService.containsKey(key);
    }

    @GetMapping("/size")
    public int size() {
        return hashMapService.size();
    }

    @GetMapping
    public List<HashMapEntry> getAll() {
        return hashMapService.getAll();
    }

    @GetMapping("/steps")
    public List<String> steps() {
        return hashMapService.getIterationSteps();
    }
}
