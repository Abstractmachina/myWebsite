import { LinkedList } from "../src/LinkedList";
import { areEqual } from "../src/util";

describe("LinkedList.js", () =>{
    test("can add an element", () => {
        const list = new LinkedList();
        list.push('a');
        expect(list.Size).toBe(1);
    });
});

describe("LinkedList.js", () =>{
    test("can insert an element in the middle", () => {
        const list = new LinkedList();
        list.push('a');
        list.push('b');
        list.insert('c', 1);
        expect(list.at(0)).toBe('a');
        expect(list.at(1)).toBe('c');
        expect(list.at(2)).toBe('b');
    });
});

describe("LinkedList.js", () =>{
    test("inserting element outside of index range will push it to list", () => {
        const list = new LinkedList();
        list.push('a');
        list.push('b');
        list.insert('c', 4);
        expect(list.at(0)).toBe('a');
        expect(list.at(1)).toBe('b');
        expect(list.at(2)).toBe('c');
    });
});

describe("LinkedList.js", () =>{
    test("can delete element by index", () => {
        const list = new LinkedList();
        list.push('a');
        list.push('b');
        list.push('c');
        list.deleteAt(1);
        expect(list.at(0)).toBe('a');
        expect(list.at(1)).toBe('c');
    });
});

describe("LinkedList.js", () =>{
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