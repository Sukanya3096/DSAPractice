class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        let current, temp = this.head;
        while (current.next) {
            temp = current;
            current = current.next;
        }
        this.tail = temp;
        this.tail.next = null;
        this.length -= 1;
        if (this.length == 0) {
            this.head = this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        this.head = current.next;
        this.length -= 1;
        if (this.length == 0) {
            this.tail = null;
        }
        return current;

    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.newNode.next = this.head;
            this.head = this.newNode;
        }
        this.length += 1;
        return this;

    }
    get(pos) {
        if(pos < 0 || pos >= this.length) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while(counter !== pos) {
            current = current.next;
            counter += 1;
        }
        return current;
    }

    set(val, i) {
        let getNode = this.get(i);
        if (getNode) {
            getNode.val = val;
            return true;
        } 
        return false;
    }
    
    insert(val,i) {
        if(i < 0 || i > this.length) {
            return false;
        }
        if(i == 0) {
            return !!this.unshift(val);
        }
        if(i == this.length) {
            return !!this.push(val);
        }
        let newNode = new Node(val);
        let getPrev = this.get(i-1);
        let oldNext = getPrev.next;
        this.getPrev.next = newNode;
        newNode.next = oldNext;
        this.length += 1;
        return true;
    }
    remove(i) {
        if(i < 0 || i > this.length) {
            return null;
        }
        if(i == 0) {
            return this.shift();
        }
        if(i == this.length) {
            return this.pop();
        }
        let getPrev = this.get(i-1);
        let getcurr = getPrev.next;
        getPrev.next = getcurr.next;
        this.length -= 1;
        return getcurr;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        this.prev = this.next = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            return this;
        }
    }
}