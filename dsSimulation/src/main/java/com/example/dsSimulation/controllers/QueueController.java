package com.example.dsSimulation.controllers;

import com.example.dsSimulation.services.QueueService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/queue")
@CrossOrigin(origins = "http://localhost:5173")
public class QueueController {

    private final QueueService queueService;

    public QueueController(QueueService queueService) {
        this.queueService = queueService;
    }

    @PostMapping("/enqueue")
    public List<Integer> enqueue(@RequestParam int value) {
        return queueService.enqueue(value);
    }

    @DeleteMapping("/dequeue")
    public List<Integer> dequeue() {
        return queueService.dequeue();
    }

    @GetMapping("/front")
    public List<Integer> front() {
        return queueService.front();
    }

    @GetMapping("/size")
    public int size() {
        return queueService.size();
    }

    @GetMapping
    public List<Integer> getAll() {
        return queueService.getAllValues();
    }

    @GetMapping("/steps")
    public List<String> steps() {
        return queueService.getIterationSteps();
    }
}
