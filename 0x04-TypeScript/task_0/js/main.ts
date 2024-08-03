interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

type studentArray = Array<Student>

const student1: Student = {firstName: 'John', lastName: 'Mike', age: 23, location: 'USA'};
const student2: Student = {firstName: 'Favour', lastName: 'Idaewor', age: 20, location: 'USA'}

const studentList: studentArray = [
    student1,
    student2
]

const table = document.querySelector('body') as HTMLBodyElement
const tabledata = studentList.map((item) => {
    return `
    <tr>
    <td>${item.firstName}</td>
    <td>${item.location}</td>
    </tr>
    `
}).join('');

table.innerHTML = `<table>${tabledata}</table>`