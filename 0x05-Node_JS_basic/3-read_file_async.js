const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const response = [];
      let msg;

      const content = data.toString().split('\n');

      let students = content.filter((item) => item);

      students = students.map((item) => item.split(','));

      const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
      msg = `Number of students: ${NUMBER_OF_STUDENTS}`;
      console.log(msg);

      response.push(msg);

      const fields = {};
      for (const x in students) {
        if (x !== 0) {
          if (!fields[students[x][3]]) fields[students[x][3]] = [];

          fields[students[x][3]].push(students[x][0]);
        }
      }

      delete fields.field;

      for (const key of Object.keys(fields)) {
        msg = `Number of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`;

        console.log(msg);

        response.push(msg);
      }
      resolve(response);
    });
  });
}

module.exports = countStudents;
