const calc = {
    total: 0,
    add(a) {
        this.total = this.total + a;
        return this;
    },
    multiply(a) {
        this.total = this.total * a;
        return this;
    }, 
    subtract(a) {
        this.total = this.total - a;
        return this;
    }

}



const result = calc.add(10).multiply(5).subtract(5).add(7);
console.log("Answer", result.total);