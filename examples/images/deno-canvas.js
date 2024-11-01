import { createCanvas, loadImage } from "https://deno.land/x/canvas/mod.ts";
import ReceiptPrinterEncoder from "../../src/pos-print-encoder.js";

let image = await loadImage('image.png');

let encoder = new ReceiptPrinterEncoder({
    createCanvas
});

let result = encoder
    .initialize()
    .image(image, 64, 64, 'atkinson')
    .encode();

console.log(result);