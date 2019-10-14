const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let nodeData = new Node(data);
        if (this._tail != null) {
            this._tail.next  = nodeData;
            nodeData.prev = this._tail;
            this._tail = nodeData;
        } else {
            this._head = nodeData;
            this._tail = nodeData;
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

    at(index) {
        let i = 0;
        let nodeData = this._head;
        while (index != i && nodeData) {
            i++;
            nodeData = nodeData.next;
        }
        if (nodeData.data) {
            return nodeData.data;
        } else {
            return false;
        }
    }

    insertAt(index, data) {
        let i = 0;
        let nodeData = this._head;
        while (nodeData && index != i) {
            i++;
            nodeData = nodeData.next;
        }
        if (nodeData) {
            if(nodeData.data){
                let newNode = new Node(data, nodeData.prev, nodeData);
                nodeData.prev.next = newNode;
                nodeData.prev= newNode;
            }
            else{
                nodeData.data = data;
            }
        } else {
            return false;
        }
        return this;
    }

    isEmpty() {
        return this._head == null ? true : false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let i = 0;
        let nodeData = this._head;
        while (index != i && nodeData) {
            i++;
            nodeData = nodeData.next;
        }
        if (nodeData) {
            if (nodeData == this._tail) {
                if (nodeData == this._head) {
                    this.clear();
                } else {
                    this._tail = nodeData.prev;
                    this.length--;
                }
            } else {
                nodeData.prev.next = nodeData.next;
                nodeData.next.prev= nodeData.prev;
                this.length--;
            }
        }
        return this;
    }

    reverse() {
        
    }

    indexOf(data) {
        let i = 0;
        while (this._head && data != this._head.data) {
            i++;
            this._head = this._head.next;
        }
        if (this._head) {
            return i;
        } else {
            return -1;
        }
    }
}

module.exports = LinkedList;
