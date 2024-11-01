import ImageData from '@canvas/image-data';
import PNG from 'png-js';
import ReceiptPrinterEncoder from "../../src/pos-print-encoder.js";

let image = await new Promise(resolve => {
    let file = PNG.load("image.png");

    file.decode(pixels => {
        let image = new ImageData(file.width, file.height);
        image.data.set(pixels);
        resolve(image);
    });
});

let encoder = new ReceiptPrinterEncoder();

let result = encoder
    .initialize()
    .image(image, 64, 64, 'atkinson')
    .encode();

console.log(result);