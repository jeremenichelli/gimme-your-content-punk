import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: './src/js/font.js',
  plugins: [
    commonjs({ sourceMap: false }),
    nodeResolve()
  ],
  output: {
    file: './static/assets/js/font.js',
    format: 'iife'
  }
}
