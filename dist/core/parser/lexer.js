"use strict";
// Define token types
var TokenType;
(function (TokenType) {
    TokenType["ComponentDeclaration"] = "ComponentDeclaration";
    TokenType["LCurly"] = "LCurly";
    TokenType["RCurly"] = "RCurly";
    TokenType["HTMLContent"] = "HTMLContent";
    TokenType["WhiteSpace"] = "WhiteSpace";
})(TokenType || (TokenType = {}));
// Define lexer function
function lexer(input) {
    const tokens = [];
    // Define token patterns with regular expressions
    const patterns = [
        { type: TokenType.ComponentDeclaration, regex: /@\S+\s*=\s*{/g },
        { type: TokenType.LCurly, regex: /{/g },
        { type: TokenType.RCurly, regex: /}/g },
        { type: TokenType.HTMLContent, regex: /<[^>]+>([^<]*)<\/[^>]+>/g }, // Updated regex
    ];
    // Iterate over token patterns
    patterns.forEach(({ type, regex }) => {
        // Match tokens using regular expressions
        const matches = input.match(regex);
        if (matches) {
            // Push matched tokens to the tokens array
            matches.forEach((match) => tokens.push({ type, value: match }));
        }
    });
    return tokens;
}
// Render function
function render(tokens) {
    const container = document.getElementById('container');
    if (!container)
        return;
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
// Example usage
const input = '@MyComponent = {<h1 style="color: red">hello</h1>}';
const tokens = lexer(input);
console.log(tokens); // Ensure tokens are correct
render(tokens);
