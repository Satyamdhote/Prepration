class Queue {
    constructor(capacity = 5) {
        this.data = [];
        this.index = 0;
        this.size = capacity;
    }

    push(x) {
        if(this.index === this.size) {
            console.log('Queue is full');
            return;
        } 
        this.data.push(x);
        ++this.index;
    }

    pop() {
        if(this.index === 0) {
            console.log('Queue is Empty');
            return;
        }
        console.log(this.data[0]); 
        this.data.shift();
    }
}

var q = new Queue();
// q.push(1);
// q.push(2);
// q.push(3);
// q.push(4);
// q.push(5);
// console.log('Q',q);
q.pop();
console.log(q);
