import { lexer } from './core/lexer/lexer.js';
import { render } from './core/renderer/renderer.js';
// Example usage
const input = '@MyComponent = {<h1>hello</h1>}';
const tokens = lexer(input);
render(tokens);
console.log(tokens);
