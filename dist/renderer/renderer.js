import { TokenType } from '../lexer/lexer.js';
// Render function
export function render(tokens) {
  const container = document.getElementById('container');
  if (!container) return;
  let componentContent = null;
  tokens.forEach((token) => {
    switch (token.type) {
      case TokenType.ComponentDeclaration:
        // Initialize componentContent when encountering ComponentDeclaration
        componentContent = '';
        break;
      case TokenType.LCurly:
        // Ignore left curly brace
        break;
      case TokenType.RCurly:
        // Ignore right curly brace
        break;
      case TokenType.HTMLContent:
        // Append HTML content to componentContent when inside a component declaration
        if (componentContent !== null) {
          componentContent += token.value;
        }
        break;
      default:
        // Ignore other token types
        break;
    }
  });
  // Render componentContent if it contains HTML content
  if (componentContent !== null) {
    container.insertAdjacentHTML('beforeend', componentContent);
  }
}
