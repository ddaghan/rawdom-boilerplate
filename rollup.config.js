
// Rollup plugins
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/testrawdom.js',
  dest: 'testrawdom.js',
  format: 'iife',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs()
  ],
};
