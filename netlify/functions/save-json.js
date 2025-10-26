const fs = require('fs').promises;
const path = require('path');

exports.handler = async function (event) {
    try {
        const { fileName, data } = JSON.parse(event.body);
        const jsonPath = path.join(__dirname, '../../annotations', fileName);
        await fs.writeFile(jsonPath, JSON.stringify(data, null, 2));
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'JSON saved' })
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'JSON kaydetme hatası' })
        };
    }
};
