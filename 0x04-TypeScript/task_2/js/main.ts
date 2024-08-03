interface DirectorsInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    workDirectortasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorsInterface {
    
    workFromHome(): string {
        return 'Working from home'
    }

    getCoffeBreak(): string {
        return 'Getting a coffee break'
    }

    workDirectortasks(): string {
        return 'Getting to director tasks'
    }
}

class Teacher implements TeacherInterface  {
    
    workFromHome(): string {
        return 'Cannot workfrom home'
    }

    getCoffeBreak(): string {
        return 'Cannot have break'
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof(salary) === "string"){
        salary = salary.replace('$', '')
    }

    if (Number(salary) < 500){
        return new Teacher
    } else {
        return new Director
    } 
}

function isDirector(employee: Teacher | Director): boolean{
    if (employee === Object(Director)){
        console.log(Object(Director))
        return true
    } else {
        console.log(Object(Director))
        return false
    }
}
console.log(isDirector(createEmployee(40)))
// function executeWork(employee: Teacher | Director): string{
//     if (!isDirector(employee)){
//         return employee.workDirectortasks
//     } else{
//         return employee.workTeachertasks
//     }
// }
