// import React from "react";
// import {  } from "@testing-library/react";
// import "@testing-library/jest-dom";  // optional
// import userEvent from "@testing-library/user-event";
// import TestComponent from "path-to-test-component";

import { LinkedList } from "../types/LinkedList";
// import { areEqual } from "../src/util";

describe("LinkedList.js", () =>{
    test("can add an element", () => {
        const list = new LinkedList();
        list.push('a');
        expect(list.Size).toBe(1);
    });

    test("can insert an element in the middle", () => {
        const list = new LinkedList();
        list.push('a');
        list.push('b');
        list.insert('c', 1);
        expect(list.at(0)).toBe('a');
        expect(list.at(1)).toBe('c');
        expect(list.at(2)).toBe('b');
    });

    test("inserting element outside of index range will push it to list", () => {
        const list = new LinkedList();
        list.push('a');
        list.push('b');
        list.insert('c', 4);
        expect(list.at(0)).toBe('a');
        expect(list.at(1)).toBe('b');
        expect(list.at(2)).toBe('c');
    });

    test("can delete element by index", () => {
        const list = new LinkedList();
        list.push('a');
        list.push('b');
        list.push('c');
        list.deleteAt(1);
        expect(list.at(0)).toBe('a');
        expect(list.at(1)).toBe('c');
    });

    test("can delete element by value", () => {
        const list = new LinkedList();
        list.push('a');
        list.push('b');
        list.push('c');
        list.delete('b', (a, b) => { 
            return a == b;
        });
        expect(list.at(0)).toBe('a');
        expect(list.at(1)).toBe('c');
    });
});
