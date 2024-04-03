// server.js
const express = require('express');
const bodyParser = require('body-parser');
const excel = require('exceljs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    // Append data to Excel sheet
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');
    worksheet.addRow([name, email]);

    workbook.xlsx.writeFile('data.xlsx')
        .then(() => {
            console.log('Data appended to Excel sheet');
            res.json({ success: true });
        })
        .catch(error => {
            console.error('Error appending data to Excel sheet:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
