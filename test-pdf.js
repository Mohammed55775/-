import fs from 'fs';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

const data = new Uint8Array(fs.readFileSync('src/assets/lesson.pdf'));
pdfjs.getDocument(data).promise.then(doc => {
  console.log('Success! Pages:', doc.numPages);
}).catch(err => {
  console.error('Error:', err.message);
});
