const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    try {
      const database = readDatabase();
      let response = 'This is the list of our students\n';

      // Count the number of students in each field
      const fields = {};
      database.forEach((student) => {
        const field = student.field.toLowerCase();
        fields[field] = fields[field] ? fields[field] + 1 : 1;
      });

      // Sort the fields alphabetically
      const sortedFields = Object.keys(fields).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      // Generate the response for each field
      sortedFields.forEach((field) => {
        const count = fields[field];
        const students = database
          .filter((student) => student.field.toLowerCase() === field)
          .map((student) => student.firstName)
          .join(', ');
        response += `Number of students in ${field.toUpperCase()}: ${count}. List: ${students}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(req, res) {
    try {
      const database = readDatabase();
      const major = req.query.major;

      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const students = database
        .filter((student) => student.field.toUpperCase() === major)
        .map((student) => student.firstName)
        .join(', ');

      const response = `List: ${students}`;

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
