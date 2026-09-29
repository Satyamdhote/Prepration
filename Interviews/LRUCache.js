class LRUCache {
    constructor(max = 5) {
        this.max = max;
        this.cache = new Map();
    }

    get(key) {
        let value = this.cache.get(key);
        if(value) {
            this.cache.delete(key);
            this.cache.set(key, value);
        }
        return value;
    }
    set(key, value) {
        if(this.cache.has(key)) {
            console.log('In Has Key');
            this.cache.delete(key);
        } else if(this.cache.size === this.max) {
            console.log('In size constraint');
            this.cache.delete(this.first()[0]);
        }
        this.cache.set(key, value);
    }

    first() {
        return this.cache.entries().next().value;
    }
}

let obj = new LRUCache(3);
obj.set("1", "satyam");
obj.set("2", "pawan");
obj.set("3", "Aman");
obj.set("4", "Raj");
obj.set("5", "Sid");
obj.set("6", "Mohit");
obj.set("1", "satyam");
obj.set("5", "Sid");
console.log(obj);
console.log(obj.first()[0]);
