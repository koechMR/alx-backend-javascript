const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const headers = lines[0].split(',');
        const students = lines.slice(1).map(line => line.split(','));

        const countByField = {};
        headers.forEach((header, index) => {
          countByField[header] = students.reduce((count, student) => {
            return student[index] !== '' ? count + 1 : count;
          }, 0);
        });

        console.log(`Number of students: ${students.length}`);
        Object.entries(countByField).forEach(([field, count]) => {
          const list = students
            .filter(student => student[headers.indexOf(field)] !== '')
            .map(student => student[headers.indexOf(field)]);
          console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
        });

        resolve();
      }
    });
  });
}
module.exports = countStudents;
