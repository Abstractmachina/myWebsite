import { LinkedList } from "../src/LinkedList";

describe("LinkedList.js", () =>{
    test("can add an element", () => {
        const list = new LinkedList();
        list.push('a');
        expect(list.Size).toBe(1);
    });
});

describe("LinkedList.js", () =>{
    test("can insert an element", () => {
        const list = new LinkedList();
        list.push('a');
        list.push('b');
        list.insert('c', 1);
        expect(list.at(1)).toBe('c');
    });
});