import { areEqual } from "./util";

export class Node {
    value = null;
    next = null;
    constructor(value) {
        this.value = value;
    }
}

export class LinkedList {
    _head = null;
    _size = 0;

    constructor() {

    }

    push(val) {

        let node = new Node(val);

        if (this._head === null) this._head = node;
        else {
            //iterate to last node
            let current = this._head;
            while (this._head.next !== null) {
                current = current.next;
            }
            current.next = node;
        }

        this._size++;
    }

    //insert value after specified index. If list is shorter than index, 
    //value will be pushed to the end.
    insert(val, idx) {
        let current = this._head;
        for (let i = 0; i < idx && current.next !== null; i++){
            current = current.next;
        }

        current.next = new Node(val);

        this._size++;
    }

    delete(val) {
        let current = this._head;

        while (current.next !== null) {

            if (areEqual(val, current.next)) {
                current.next = current.next.next;
                break;
            }

            current = current.next;
        }
        this._size--;
    }

    get Head() {
        return this._head;
    }

    set Head(val) {
        this._head = new Node(val);
    }

    get Size() {
        return this._size;
    }
}

