import { lexer } from './lexer/lexer';
import { render } from './renderer/renderer';

// Example usage
const input = '@Hello = {<h1>hello</h1>}';
const tokens = lexer(input);
render(tokens);
