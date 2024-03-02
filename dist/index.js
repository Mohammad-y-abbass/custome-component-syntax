import { lexer } from './lexer/lexer.js';
import { render } from './renderer/renderer.js';
// Example usage
const input = '@Hello = {<h1>hello</h1>}';
const tokens = lexer(input);
render(tokens);
