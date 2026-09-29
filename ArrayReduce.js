// ========================== Implementation =====================================================
let data = [1,2,3,4];
const ans = data.reduce((item, acc) => {
    return (acc+item)
},0)
console.log(ans);


//=========================== Prototype ============================================================
Array.prototype.myReduce = function(callBack, initialValue) {
    console.log(arguments.length); // it is 1 if no initial value is passed and 2 if initial value is passed (Here in this case it is 0)
    const hasInitialValue = arguments.length >= 2;

    let accumulator;
    let startIndex;

    if (hasInitialValue) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = this[0];
        startIndex = 1;
    }
    for(let i=startIndex;i<this.length;i++) {
        const nextValue = this[i];
        accumulator = callBack(accumulator, nextValue, i, this)
    }
    return accumulator;
}


const ans2 = data.myReduce((acc, next, index, arr) => {
    return (acc+next)
}, 0)
console.log(ans2);

// ===========================  Reduce Programs  ===========================================
const employees = [
    {
        id:1,
        name: "Satyam",
        age: 30,
        department: "Engineering",
        salary:150000,
        skills:["Javascript", "NodeJS", "ReactJS"],
        projects:[
            {
                id:101,
                name:"Copilot",
                status:"Active"
            },
            {
                id:102,
                name:"Blob Migration",
                status:"Completed"
            },
        ]
    },
    {
        id:2,
        name: "Ankit",
        age: 31,
        department: "Engineering",
        salary:120000,
        skills:["Java", "Spring", "Azure"],
        projects:[
            {
                id:101,
                name:"Copilot",
                status:"Active"
            },
        ]
    },
    {
        id:3,
        name: "Priya",
        age: 27,
        department: "QA",
        salary:90000,
        skills:["Selenium", "Java"],
        projects:[]
    },
    {
        id:4,
        name: "Neha",
        age: 35,
        department: "HR",
        salary:80000,
        skills:["Communication"],
        projects:[
            {
                id:104,
                name:"Employee Portal",
                status:"Active"
            },
        ]
    }
]

//1. Calculate total salary of all employees
const totalSalary = employees.reduce((total, e) => {
    return e.salary + total;
}, 0)
console.log(totalSalary);


//2. Highest paid employee
const sortEmployee = employees.sort((a, b) => b.salary - a.salary);
console.log(sortEmployee[0]);
   //Using Reduce

const highestPaid = employees.reduce((max, e) => {
    return e.salary > max.salary ? e: max
})
console.log(highestPaid);


// 3. Count Employee per Department
const deptCount = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1 ; 
    return acc;
}, {})
console.log(deptCount);

// map and reduce

const departmentCount = employees.reduce((map, emp) => {
    map.set(
        emp.department,
        (map.get(emp.department) || 0) + 1
    );

    return map;
}, new Map());

console.log(departmentCount);


//4. Average of Salaries
const avgSalary = employees.reduce((acc, emp) => {
    return acc + emp.salary;
}, 0)/employees.length
console.log(avgSalary);


//5. Employees with most skills
const mostSkills = employees.reduce((max, emp) => {
    return max.skills.length > emp.skills.length ? max: emp; 
})
console.log(mostSkills);

//6. Count projects by Status
const completedByStatus = employees.reduce((map, emp) => {
    emp.projects.forEach((project) => {
        map.set(project.status, (map.get(project.status) || 0) + 1)
    })
    return map;
}, new Map())
console.log(completedByStatus);


const projectsByStatus = employees.flatMap(emp => emp.projects).reduce((acc, project) => {
     acc[project.status] = (acc[project.status] || 0) + 1;
     return acc;
}, {})
console.log(projectsByStatus);

//7. Group Employees by Department
const groupedEmployees = employees.reduce((acc, emp) => {
    acc[emp.department] ??= [];
    acc[emp.department].push(emp);
    return acc;
}, {})

// 8. project name with Employee name
// {
//   Copilot: ["Satyam", "Ankit"],
//   "Blob Migration": ["Satyam"],
//   "Employee Portal": ["Neha"]
// }

const projectEmpName = employees.reduce((acc, emp) => {
    emp.projects.forEach((project) => {
        acc[project.name] ??= [];
        acc[project.name].push(emp.name);
    })
    return acc;
}, {})

console.log(projectEmpName);