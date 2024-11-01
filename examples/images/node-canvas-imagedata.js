import { createCanvas, loadImage } from 'canvas';
import ReceiptPrinterEncoder from "../../src/pos-print-encoder.js";

let image = await loadImage('image.png');

let canvas = createCanvas(64, 64);
let ctx = canvas.getContext('2d');
ctx.drawImage(image, 0, 0, 64, 64);

let imageData = ctx.getImageData(0, 0, 64, 64);

let encoder = new ReceiptPrinterEncoder();

let result = encoder
    .initialize()
    .image(imageData, 64, 64, 'atkinson')
    .encode();

console.log(result);