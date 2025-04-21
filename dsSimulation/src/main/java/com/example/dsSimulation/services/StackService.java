package com.example.dsSimulation.services;

import com.example.dsSimulation.model.StackNode;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

@Service
public class StackService {

    private final Stack<StackNode> stack = new Stack<>();
    private int nextId = 0;

    public List<Integer> push(int value) {
        stack.push(new StackNode(nextId++, value));
        return getAllValues();
    }

    public List<Integer> pop() {
        if (!stack.isEmpty()) {
            stack.pop();
        }
        return getAllValues();
    }

    public List<Integer> peek() {
        List<Integer> top = new ArrayList<>();
        if (!stack.isEmpty()) {
            top.add(stack.peek().getValue());
        }
        return top;
    }

    public int size() {
        return stack.size();
    }

    public List<Integer> getAllValues() {
        List<Integer> values = new ArrayList<>();
        for (StackNode node : stack) {
            values.add(node.getValue());
        }
        return values;
    }

    public List<String> getIterationSteps() {
        List<String> steps = new ArrayList<>();
        int index = stack.size() - 1;
        for (int i = stack.size() - 1; i >= 0; i--) {
            StackNode node = stack.get(i);
            steps.add("Index " + (index - i) + " → (ID: " + node.getId() + ", Value: " + node.getValue() + ")");
        }
        return steps;
    }
}
