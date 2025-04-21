package com.example.dsSimulation.services;

import com.example.dsSimulation.model.LinkedListNode;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LinkedListService {

    private LinkedListNode head = null;
    private int nextId = 0;

    public List<Integer> getAllNodes() {
        List<Integer> result = new ArrayList<>();
        LinkedListNode current = head;
        while (current != null) {
            result.add(current.getValue());
            current = current.getNext();
        }
        return result;
    }

    public List<Integer> addNode(int value) {
        LinkedListNode newNode = new LinkedListNode(nextId++, value, null);
        if (head == null) {
            head = newNode;
        } else {
            LinkedListNode current = head;
            while (current.getNext() != null) {
                current = current.getNext();
            }
            current.setNext(newNode);
        }
        return getAllNodes();
    }

    public List<Integer> removeNode(int id) {
        if (head == null) return getAllNodes();

        if (head.getId() == id) {
            head = head.getNext();
            return getAllNodes();
        }

        LinkedListNode current = head;
        while (current.getNext() != null && current.getNext().getId() != id) {
            current = current.getNext();
        }

        if (current.getNext() != null) {
            current.setNext(current.getNext().getNext());
        }

        return getAllNodes();
    }

    public List<Integer> removeByIndex(int index) {
        if (head == null || index < 0) return getAllNodes();

        if (index == 0) {
            head = head.getNext();
            return getAllNodes();
        }

        LinkedListNode current = head;
        int count = 0;

        while (current.getNext() != null && count < index - 1) {
            current = current.getNext();
            count++;
        }

        if (current.getNext() != null) {
            current.setNext(current.getNext().getNext());
        }

        return getAllNodes();
    }

    public List<Integer> removeByValue(int value) {
        if (head == null) return getAllNodes();

        if (head.getValue() == value) {
            head = head.getNext();
            return getAllNodes();
        }

        LinkedListNode current = head;
        while (current.getNext() != null && current.getNext().getValue() != value) {
            current = current.getNext();
        }

        if (current.getNext() != null) {
            current.setNext(current.getNext().getNext());
        }

        return getAllNodes();
    }

    public int getSize() {
        int count = 0;
        LinkedListNode current = head;
        while (current != null) {
            count++;
            current = current.getNext();
        }
        return count;
    }

    public List<String> getIterationSteps() {
        List<String> steps = new ArrayList<>();
        LinkedListNode current = head;
        int index = 0;
        while (current != null) {
            steps.add("Index " + index + " → (ID: " + current.getId() + ", Value: " + current.getValue() + ")");
            current = current.getNext();
            index++;
        }
        return steps;
    }
}
