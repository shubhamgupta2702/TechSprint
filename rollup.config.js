import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  // ... other config
  plugins: [
    resolve(),  // helps Rollup find node modules
    commonjs(), // converts CommonJS modules to ES6
    // ... other plugins
  ]
};