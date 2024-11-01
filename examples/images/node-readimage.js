import fs from 'node:fs';
import readimage from 'readimage';
import ReceiptPrinterEncoder from "../../src/pos-print-encoder.js";


let image = await new Promise(resolve => {
    readimage(fs.readFileSync("image.png"), (err, image) => {
        resolve(image);
    });
})

let encoder = new ReceiptPrinterEncoder();

let result = encoder
    .initialize()
    .image(image, 64, 64, 'atkinson')
    .encode();

console.log(result);