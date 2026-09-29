class Stack {
    constructor(size = 5) {
        this.data = [];
        this.nextElem = 0;
        this.capacity = size;
    }

    insert(val) {
        if(this.nextElem === this.capacity) {
            console.log("Stack full");
            return;
        }
        this.data.push(val);
        this.nextElem++;
    }

    pop() {
        if(this.nextElem === 0) {
            console.log("Stack is Empty");
            return;
        }
        console.log('Here',this.data);
        let del = this.data.shift(1);
        this.nextElem--;
        return del;
    }

    top() {
        return this.data[0];
    }

    size() {
        return this.data.length;
    }
}


var s = new Stack(5);
console.log(s);
s.insert(1);
s.insert(2);
s.insert(3);
s.insert(4);
s.insert(5);
console.log(s.pop());
console.log(s.top());
console.log(s.size());

