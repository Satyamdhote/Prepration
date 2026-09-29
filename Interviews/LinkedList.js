class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = null;
    }

    add(val) {
        let newNode = new Node(val);
        console.log('new', newNode);
        if(this.head === null) {
            newNode.next = null;
            this.head = newNode;
            console.log('0', this.head);
            return newNode;
        } 
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    print(head) {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.val + " ";
            curr = curr.next;
        }
        console.log(str);
        
    }
}

var ll = new LinkedList();
ll.add(1);
ll.add(2);
console.log(ll);
ll.print(this.head);

