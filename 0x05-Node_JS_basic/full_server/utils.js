const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const students = JSON.parse(data);
          const result = {};
          students.forEach((student) => {
            const { field, firstname } = student;
            if (!result[field]) {
              result[field] = [];
            }
            result[field].push(firstname);
          });
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }
    });
  });
}
