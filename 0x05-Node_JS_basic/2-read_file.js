const fs = require('fs');


function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length < 2) {
            throw new Error('Cannot load the database');
        }

        const headers = lines[0].split(',');
        const students = lines.slice(1).map((line) => line.split(','));

        // Group students by field (last column in the CSV)
        const fields = {};
        students.forEach((student) => {
            if (student.length === headers.length) { // Ignore invalid lines
                const field = student[headers.length - 1].trim();
                const firstName = student[0].trim();

                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstName);
            }
        });

        // Log the total number of students
        console.log(`Number of students: ${students.length}`);

        // Log the number of students and their names in each field
        for (const [field, names] of Object.entries(fields)) {
            console.log(
                `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
            );
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
