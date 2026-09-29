// ====================================== Usage ========================================
let data = [
    {id:1, name:"Satyam", age:21},
    {id:2, name:"Sat", age:22},
    {id:3, name:"Sajal", age:21},
    ]
const ans = data.filter((item) => {
    return item.age===21;
})
console.log(ans);

// ====================================== Prototype ========================================
Array.prototype.myFilter = function(callBack) {
    let newArr = [];
    for(let i=0;i<this.length;i++) {
        let val = this[i];
        let newVal = callBack(val,i, this);
        if(newVal) {
            newArr.push(val);
        }
    }
    return newArr;
}

function transform(item, index, array) {
    return item.id === 1;
}
const ans2 = data.myFilter(transform);
console.log(ans2);

// ====================================== Operations ========================================
//1. get Employees whose salary > 100000
const employeeSal = employees.filter(e => e.salary > 100000);
// console.log(employeeSal);

//2. Find Employees working on Copilot
const workingOnCopilot = employees.filter((emp) => {
    return emp.projects.some(e => e.name === 'Copilot')
})

//3. Any employee from HR
const anyEmployee = employees.some(({ department }) => department === 'HR')
console.log("ANY EMPLOYEE", anyEmployee);

const thatEmployee = employees.filter((emp) => {
    return emp.department === 'HR'
})
console.log("THAT EMPLOYEE", thatEmployee);

//4. Employees having Azure Skill
const skillAzure = employees.filter(emp => emp.skills.includes("Azure"))
console.log(skillAzure);

//5. Removing Duplicate objects
const arr1 = [{id: 1, name:"A"}, {id:2, name: "B"}]
const arr2 = [{id: 1, name:"A"}, {id:3, name: "C"}]

const mergedArr = [...arr1, ...arr2];

const removeDuplicate = mergedArr.filter((item, index, arr) => index === arr.findIndex(obj => obj.id === item.id));
console.log(removeDuplicate);

//6. Find All employees working on Active Projects
const activeProjects = employees.filter((emp) => {
    return emp.projects.some((e) => e.status === 'Active');
})
console.log("ACTIVE", activeProjects);

//7. Find all Active Project names
const activeProjectsNames = employees.flatMap((emp) => {
    return emp.projects.filter(e => e.status === 'Active')
        .map(e => e.name)
})
console.log([...new Set(activeProjectsNames)]);

//SOME
//8. Any employee from HR
const anyEmployee = employees.some(({ department }) => department === 'HR')
console.log("ANY EMPLOYEE", anyEmployee);

//EVERY
//9. Every employee earn more than 50K
const earn = employees.every((emp) => emp.salary > 50000);
console.log(earn);