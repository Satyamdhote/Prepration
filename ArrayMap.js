// ========================================= Usage =========================================
let data = [
    {id:1, name:"Satyam"},
    {id:2, name:"Sat"},
    {id:3, name:"Sajal"},
    ]
const ans = data.map((item) => {
    return item.name;
})
console.log(ans);

// ======================== Step1 - Construction using Functions ============================================

function transform(val, i, arr) {
   return  val*val;
}
function myMap(array, callback) {
    let newVal = [];
    for(let i=0;i<array.length;i++) {
        val = array[i];
        const transformVal = callback(val, i, array);
        newVal.push(transformVal);
    }
    return newVal;
}

let array = [1,2,3,4,5];
const res = myMap(arr, transform);
console.log(res);

// ==================  Step 2 - Prototype Creartion ================================
Array.prototype.myMap = function(callback) {
    console.log('THIS', this);
    let result = [];
    for(let i=0;i<this.length;i++) {
        if(this.hasOwnProperty(i)) { //For cases with Empty Array (array2)
            const val = this[i];
            const transformVal = callback(val, i, this);
            result.push(transformVal);
        }
    }
    return result;
}

function getSquare(n) {
    return n*n;
}


let array1 = [1,2,3,4,5];
let array2 = [1, , , 3, , 5];
const res1 = array1.myMap(getSquare);
const res2 = array2.myMap(getSquare);
console.log(res1);
console.log(res2);

const org = array2.map(a => a*a);
console.log(org);


// ================================== Programs ====================================
//1. Get all unique Skills
const uniqueSkills1= [...new Set(employees.map(e => e.skills).flat())];
const uniqueSkills= [...new Set(employees.flatMap(e => e.skills))];

//2. get All Project names
const getAllProjectnames = employees.flatMap((emp) => {
    return emp.projects.map((project) => {
        return project.name
    });
})

//3. Get unique Project names
const getUniqueProjectNames = [...new Set(employees.flatMap((emp) => {
    return emp.projects.map((e) => {
        return e.name;
    })
}))]
console.log(getUniqueProjectNames);


//4. Project count per employee
const projectCountEmployee = employees.map((emp) => {
    return {
        name: emp.name,
        count: emp.projects.length
    }
})
console.log(projectCountEmployee);

//5. Find all Active Project names
const activeProjectsNames = employees.flatMap((emp) => {
    return emp.projects.filter(e => e.status === 'Active')
        .map(e => e.name)
})
console.log([...new Set(activeProjectsNames)]);

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
