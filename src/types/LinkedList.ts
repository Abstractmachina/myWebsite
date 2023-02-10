
// type Nullable<T> = T | null;

interface Printable {
    toString: () => string,
}

export class Node<T extends Printable> {
    public Value:T;
    public Next:Node<T> | null= null;
    constructor(value:T) {
        this.Value = value;
    }
}

export class LinkedList<T extends Printable> {
    //TODO: implement iterator
    private _head :Node<T> | null = null;
    private _size:number = 0;

    push(val:T) {

        let node = new Node(val);

        if (this._head === null) this._head = node;
        else {
            //iterate to last node
            let current: Node<T> = this._head;
            while ( current.Next !== null) {
                current = current.Next;
            }
            current.Next = node;
        }

        this._size++;
    }

    //insert value after specified index. If list is shorter than index, 
    //value will be pushed to the end.
    insert(val:T, idx:number): boolean {
        if (idx < 0) return false;
        let current = this._head;
        let prev = current;
        for (let i = 0; i < idx && current !== null; i++){
            prev = current;
            current = current.Next;
        }
        let n = new Node(val);
        if (prev !== null) prev.Next = n;
        n.Next = current;

        this._size++;
        return true;
    }
    
    deleteAt(idx:number){
        if (idx >= this._size || idx < 0) return false;
        let current = this._head;
        let prev = null;
        for (let i = 0; i < idx && current !== null; i++){
            prev = current;
            current = current.Next;
        }
        if (prev !== null && current !== null) prev.Next = current.Next;

        this._size--;
    }

    /* pass in function for comparing two elements required, as
    equality for two objects is not clear cut. */
    delete(val:T, func:(a:T, b:T) => boolean) : boolean {
        let current = this._head;

        let valueFound = false;
        while (current !== null && current.Next !== null) {

            if (func(val, current.Next.Value)) {
                current.Next = current.Next.Next;
                valueFound = true;
                break;
            }

            current = current.Next;
        }
        if (valueFound) this._size--;
        return valueFound;
    }

    at(idx:number): T| null {
        let curr = this._head;
        for (let i = 0; i < idx && curr !== null; i++){
            curr = curr.Next;
        }

        return (curr === null)? null : curr.Value;
    }

    toString() : string {
        let idx = 0;
        let node = this._head;
        let output = 'LinkedList: \n';
        while (node !== null) {
            output+= `${idx}: ${node.Value.toString()}\n`;
            node = node.Next;
            idx++;
        }
        return output;
    }

    get Head(): Node<T> | null {
        return (this._head !== null)? this._head : null;
    }

    set Head(val: Node<T> | null) {
        this._head = val;
    }

    get Size() :number {
        return this._size;
    }   
}