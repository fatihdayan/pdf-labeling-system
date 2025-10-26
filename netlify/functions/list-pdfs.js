const fs = require('fs').promises;
const path = require('path');

exports.handler = async function () {
    try {
        const pdfDir = path.join(__dirname, '../../pdfs');
        const files = await fs.readdir(pdfDir);
        const pdfFiles = files.filter(file => file.endsWith('.pdf'));
        return {
            statusCode: 200,
            body: JSON.stringify(pdfFiles)
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'PDF listesi alınamadı' })
        };
    }
};
