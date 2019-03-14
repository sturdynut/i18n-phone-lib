import { terser } from "rollup-plugin-terser";

export default {
  input: 'tmp/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'i18nPhoneLib'
  },
  plugins: [ terser() ]
};
