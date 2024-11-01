import pixels from 'image-pixels';
import ReceiptPrinterEncoder from "../../src/pos-print-encoder.js";

let imageData = await pixels('image.png');

let encoder = new ReceiptPrinterEncoder();

let result = encoder
    .initialize()
    .image(imageData, 64, 64, 'atkinson')
    .encode();

console.log(result);