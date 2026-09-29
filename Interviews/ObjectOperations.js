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


// 1. Get All Employee Names

const employeeNames = employees.map(e => e.name);
// console.log(employeeNames);

//2. get Employees whose salary > 100000
const employeeSal = employees.filter(e => e.salary > 100000);
// console.log(employeeSal);

//3. Find employee with a id
const findEmployee = employees.find(e => e.id === 3);
// console.log(findEmployee);

//4. Calculate total salary of all employees
const totalSalary = employees.reduce((total, e) => {
    return e.salary + total;
}, 0)
console.log(totalSalary);


//5. Highest paid employee
const sortEmployee = employees.sort((a, b) => b.salary - a.salary);
console.log(sortEmployee[0]);
   //Using Reduce

const highestPaid = employees.reduce((max, e) => {
    return e.salary > max.salary ? e: max
})
console.log(highestPaid);

//6. Get all unique Skills
const uniqueSkills1= [...new Set(employees.map(e => e.skills).flat())];
const uniqueSkills= [...new Set(employees.flatMap(e => e.skills))];

console.log(uniqueSkills);

// 7. Count Employee per Department
 //Map
 const map = new Map();
    for(let emp of employees) {
        if(!map.has(emp.department)) {
            map.set(emp.department, 1);
        } else {
            map.set(emp.department, map.get(emp.department) + 1);
        }
    }

    let res = {};
    for(let [key, value] of map.entries()) {
    res[key] = value;
    }

    console.log(res);

//Reduce
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


//8 Group Employees by Department
const groupedEmployees = employees.reduce((acc, emp) => {
    acc[emp.department] ??= [];
    acc[emp.department].push(emp);
    return acc;
}, {})

console.log(groupedEmployees);

//9. get All Project names
const getAllProjectnames = employees.flatMap((emp) => {
    return emp.projects.map((project) => {
        return project.name
    });
})
console.log(getAllProjectnames);

//10. Get unique Project names
const getUniqueProjectNames = [...new Set(employees.flatMap((emp) => {
    return emp.projects.map((e) => {
        return e.name;
    })
}))]
console.log(getUniqueProjectNames);

//11. Find Employees working on Copilot
const workingOnCopilot = employees.filter((emp) => {
    return emp.projects.some(e => e.name === 'Copilot')
})

console.log(workingOnCopilot);

//12. Sort By Salary Desc
const result = employees.sort((a, b) => b.salary -a.salary);
console.log(result);

//13. Sort By Name
const sortByName = employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortByName); 

//14. Every employee earn more than 50K
const earn = employees.every((emp) => emp.salary > 50000);
console.log(earn);

//15. Any employee from HR
const anyEmployee = employees.some(({ department }) => department === 'HR')
console.log("ANY EMPLOYEE", anyEmployee);

const thatEmployee = employees.filter((emp) => {
    return emp.department === 'HR'
})
console.log("THAT EMPLOYEE", thatEmployee);

//16. Average of Salaries
const avgSalary = employees.reduce((acc, emp) => {
    return acc + emp.salary;
}, 0)/employees.length
console.log(avgSalary);

//17. Employees having Azure Skill
const skillAzure = employees.filter(emp => emp.skills.includes("Azure"))
console.log(skillAzure);

//18 Project count per employee
const projectCountEmployee = employees.map((emp) => {
    return {
        name: emp.name,
        count: emp.projects.length
    }
})
console.log(projectCountEmployee);

//19. Removing Duplicate objects
const arr1 = [{id: 1, name:"A"}, {id:2, name: "B"}]
const arr2 = [{id: 1, name:"A"}, {id:3, name: "C"}]

const mergedArr = [...arr1, ...arr2];

const removeDuplicate = mergedArr.filter((item, index, arr) => index === arr.findIndex(obj => obj.id === item.id));
console.log(removeDuplicate);

//20 Employees with most skills
const mostSkills = employees.reduce((max, emp) => {
    return max.skills.length > emp.skills.length ? max: emp; 
})
console.log(mostSkills);

//21. Find All employees working on Active Projects
const activeProjects = employees.filter((emp) => {
    return emp.projects.some((e) => e.status === 'Active');
})
console.log("ACTIVE", activeProjects);

//22. Find all Active Project names
const activeProjectsNames = employees.flatMap((emp) => {
    return emp.projects.filter(e => e.status === 'Active')
        .map(e => e.name)
})
console.log([...new Set(activeProjectsNames)]);

//23. Count projects by Status
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

// 24. project name with Employee name
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



const res5 = employees.filter((emp) => emp.projects.some(p => p.status === 'Active'));
console.log("TESTTTT", res5);
