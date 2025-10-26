const fs = require('fs').promises;
const path = require('path');

exports.handler = async function (event) {
    try {
        const fileName = event.queryStringParameters.file;
        const jsonPath = path.join(__dirname, '../../annotations', fileName);
        const data = await fs.readFile(jsonPath, 'utf8');
        return {
            statusCode: 200,
            body: data
        };
    } catch (err) {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: 'JSON bulunamadı' })
        };
    }
};
