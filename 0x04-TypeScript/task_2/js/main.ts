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

class Teacher implements TeacherInterface {
    
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
console.log(createEmployee(20));
console.log(createEmployee(1000));
console.log(createEmployee('$500'))
