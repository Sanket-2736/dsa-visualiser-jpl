package com.example.dsSimulation.controllers;

import com.example.dsSimulation.services.StackService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//http://localhost:8080/api/stack
@RestController
@RequestMapping("/api/stack")
@CrossOrigin(origins = "http://localhost:5173")
public class StackController {

    private final StackService stackService;

    public StackController(StackService stackService) {
        this.stackService = stackService;
    }

    @PostMapping("/push")
    public List<Integer> push(@RequestParam int value) {
        return stackService.push(value);
    }

    @DeleteMapping("/pop")
    public List<Integer> pop() {
        return stackService.pop();
    }

    @GetMapping("/peek")
    public List<Integer> peek() {
        return stackService.peek();
    }

    @GetMapping("/size")
    public int size() {
        return stackService.size();
    }

    @GetMapping
    public List<Integer> getAll() {
        return stackService.getAllValues();
    }

    @GetMapping("/steps")
    public List<String> steps() {
        return stackService.getIterationSteps();
    }
}
