const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',');
    const students = lines.slice(1);

    const count = students.length;
    console.log(`Number of students: ${count}`);

    headers.forEach(header => {
      const fieldIndex = headers.indexOf(header);
      const fieldStudents = students.map(student => student.split(',')[fieldIndex]);
      const fieldCount = fieldStudents.filter(student => student.trim() !== '').length;
      const fieldList = fieldStudents.filter(student => student.trim() !== '').join(', ');
      console.log(`Number of students in ${header}: ${fieldCount}. List: ${fieldList}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
