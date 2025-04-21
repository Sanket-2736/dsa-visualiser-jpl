package com.example.dsSimulation.controllers;

import com.example.dsSimulation.services.LinkedListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//http://localhost:8080/api/linked-list
@RestController
@RequestMapping("/api/linked-list")
@CrossOrigin(origins = "http://localhost:5173")
public class LinkedListController {

    @Autowired
    private final LinkedListService linkedListService;

    public LinkedListController(LinkedListService linkedListService) {
        this.linkedListService = linkedListService;
    }

    @GetMapping
    public List<Integer> getAllNodes() {
        return linkedListService.getAllNodes();
    }

    @PostMapping("/add")
    public List<Integer> addNode(@RequestParam int value) {
        return linkedListService.addNode(value);
    }

    @DeleteMapping("/remove/{id}")
    public List<Integer> removeNode(@PathVariable int id) {
        return linkedListService.removeNode(id);
    }

    @DeleteMapping("/remove-by-index/{index}")
    public List<Integer> removeByIndex(@PathVariable int index) {
        return linkedListService.removeByIndex(index);
    }

    @DeleteMapping("/remove-by-value/{value}")
    public List<Integer> removeByValue(@PathVariable int value) {
        return linkedListService.removeByValue(value);
    }

    @GetMapping("/size")
    public int getSize() {
        return linkedListService.getSize();
    }

    @GetMapping("/steps")
    public List<String> getIterationSteps() {
        return linkedListService.getIterationSteps();
    }
}
