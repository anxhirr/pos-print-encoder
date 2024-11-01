import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [

	// Browser-friendly UMD build
	{
		input: 'src/pos-print-encoder.js',
		output: {
			name: 'ReceiptPrinterEncoder',
			file: 'dist/pos-print-encoder.umd.js',
			sourcemap: true,
			format: 'umd'
		},
		plugins: [
			resolve({ browser: true }), 
			commonjs(),
            terser()
		]
	},

	// Browser-friendly ES module build
	{
		input: 'src/pos-print-encoder.js',
		output: { 
			file: 'dist/pos-print-encoder.esm.js', 
			sourcemap: true,
			format: 'es' 
		},
		plugins: [
			resolve({ browser: true }), 
			commonjs(),
            terser()
		]
	},

    // CommonJS (for Node) and ES module (for bundlers) build
    {
		input: 'src/pos-print-encoder.js',
		external: ['@canvas/image-data', 'canvas-dither', 'canvas-flatten', 'resize-image-data', '@point-of-sale/codepage-encoder'],
		output: [
			{ file: 'dist/pos-print-encoder.cjs', format: 'cjs' },
			{ file: 'dist/pos-print-encoder.mjs', format: 'es' }
		]
	}
];
