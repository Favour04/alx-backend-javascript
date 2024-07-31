interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fulTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any
}

const teacher1: Teacher = {
    firstName: 'Johnson', 
    lastName: 'Doe', 
    fulTimeEmployee: true, 
    contract: false,
    location: "Nigeria"
}

console.log(teacher1)