const fs = require('fs').promises;

/**
 * Function to count students in a CSV database file asynchronously
 * @param {string} path - Path to the CSV file
 * @returns {Promise}
 */
async function countStudents(path) {
    try {
        // Read the file asynchronously
        const data = await fs.readFile(path, 'utf-8');

        // Split the data into lines and filter out empty ones
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Check if the file has valid content (at least one header line and one data line)
        if (lines.length < 2) {
            throw new Error('Cannot load the database');
        }

        // Extract headers (first line) and students' data (subsequent lines)
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

        return Promise.resolve();
    } catch (err) {
        return Promise.reject(new Error('Cannot load the database'));
    }
}

module.exports = countStudents;
