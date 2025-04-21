package com.example.dsSimulation.services;

import com.example.dsSimulation.model.QueueNode;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.ArrayList;

@Service
public class QueueService {

    private final Queue<QueueNode> queue = new LinkedList<>();
    private int nextId = 0;

    public List<Integer> enqueue(int value) {
        queue.offer(new QueueNode(nextId++, value));
        return getAllValues();
    }

    public List<Integer> dequeue() {
        if (!queue.isEmpty()) {
            queue.poll();
        }
        return getAllValues();
    }

    public List<Integer> front() {
        List<Integer> front = new ArrayList<>();
        if (!queue.isEmpty()) {
            front.add(queue.peek().getValue());
        }
        return front;
    }

    public int size() {
        return queue.size();
    }

    public List<Integer> getAllValues() {
        List<Integer> values = new ArrayList<>();
        for (QueueNode node : queue) {
            values.add(node.getValue());
        }
        return values;
    }

    public List<String> getIterationSteps() {
        List<String> steps = new ArrayList<>();
        int index = 0;
        for (QueueNode node : queue) {
            steps.add("Index " + index++ + " → (ID: " + node.getId() + ", Value: " + node.getValue() + ")");
        }
        return steps;
    }
}
