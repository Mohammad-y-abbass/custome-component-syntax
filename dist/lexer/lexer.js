// Define token types
export var TokenType;
(function (TokenType) {
    TokenType["ComponentDeclaration"] = "ComponentDeclaration";
    TokenType["LCurly"] = "LCurly";
    TokenType["RCurly"] = "RCurly";
    TokenType["HTMLContent"] = "HTMLContent";
    TokenType["WhiteSpace"] = "WhiteSpace";
})(TokenType || (TokenType = {}));
// Define lexer function
export function lexer(input) {
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
