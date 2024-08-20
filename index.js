const { Configuration, OpenAIApi } = require("openai");
const { Document, Packer, Paragraph, TextRun } = require("docx");
const fs = require("fs");
const http = require('http');
require('dotenv').config();

const port = 8443;

// Настройка OpenAI API
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_TOKEN,
// });
// const openai = new OpenAIApi(configuration);

// async function generateTechnicalSpecification(prompt) {
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: prompt,
//         max_tokens: 1500,
//     });

//     return response.data.choices[0].text.trim();
// }

// async function saveToWord(docText, filePath) {
//     const doc = new Document();

//     doc.addSection({
//         children: [
//             new Paragraph({
//                 children: [
//                     new TextRun({
//                         text: "Техническое задание",
//                         bold: true,
//                         size: 48,
//                     }),
//                 ],
//                 heading: "Heading1",
//             }),
//             ...docText.split('\n').map(line => new Paragraph(line)),
//         ],
//     });

//     const packer = new Packer();
//     const buffer = await packer.toBuffer(doc);
//     fs.writeFileSync(filePath, buffer);
// }

// async function main() {
//     const prompt = "Напиши техническое задание для создания интернет-магазина";
//     const generatedText = await generateTechnicalSpecification(prompt);
//     await saveToWord(generatedText, "technical_specification.docx");

//     console.log("Техническое задание сохранено в 'technical_specification.docx'");
// }

const server = http.createServer((req, res) => {
    console.log(req);

    res.end();
});

server.listen(port, function (error) {

    // Checking any error occur while listening on port
    if (error) {
        console.log('Something went wrong', error);
    }
    // Else sent message of listening
    else {
        console.log('Server is listening on port' + port);
    }
});

// main();
