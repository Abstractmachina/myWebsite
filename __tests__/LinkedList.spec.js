import { LinkedList } from "../src/LinkedList";

describe("LinkedList.js", () =>{

    const list = new LinkedList();
    test("add an element", () => {
        list.push('a');
        expect(list.Size).toBe(1);
    });
});