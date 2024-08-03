interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fulTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface Student {
    firstName: string;
    lastName: string;
}

class studentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomebook(): string {
        return 'Currently working'  
    }

    displayName(): string {
        return this.firstName
    }
}

function printTeacher(fName: string, lName: string){
    return `${fName[0]}. ${lName}`
}

const teacher1: Teacher = {
    firstName: 'Johnson', 
    lastName: 'Doe', 
    fulTimeEmployee: true, 
    contract: false,
    location: "Nigeria",
}

console.log(printTeacher('John', 'Doe'))