import { lexer } from './core/lexer/lexer';
import { render } from './core/renderer/renderer';

// Example usage
const input = '@MyComponent = {<h1>hello</h1>}';
const tokens = lexer(input);
render(tokens);
