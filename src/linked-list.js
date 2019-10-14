const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if (this._tail != null) {
            this._tail.next  = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head) { 
            return this._head.data;
        } else {
            return this._head;
        }
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        } else {
            return this._tail;
        }
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
        return this._head == null ? true : false;
    }

    clear() {
        
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
