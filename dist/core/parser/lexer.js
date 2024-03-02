// lexer.ts
class Lexer {
    constructor(input) {
        this.position = 0; // Current position in the input code
        this.input = input;
    }
    lex() {
        const tokens = []; // Array to store generated tokens
        // Loop through the input code until the end
        while (this.position < this.input.length) {
            const char = this.input[this.position]; // Current character
            // Skip whitespace characters
            if (/\s/.test(char)) {
                this.position++; // Move to the next character
                continue; // Skip to the next iteration
            }
            // Recognize token types and generate tokens
            if (char === '@') {
                // ComponentName: Recognize @ComponentName
                tokens.push({
                    type: 'ComponentName',
                    value: this.readWhile(/[a-zA-Z_]/),
                });
            }
            else if (char === 'p') {
                if (this.input.slice(this.position, this.position + 5) === 'props') {
                    // PropsKeyword: Recognize props keyword
                    tokens.push({ type: 'PropsKeyword', value: 'props' });
                    this.position += 5; // Move past the 'props' keyword
                }
                else {
                    // PropName: Recognize prop name
                    tokens.push({ type: 'PropName', value: this.readWhile(/[a-zA-Z_]/) });
                }
            }
            else if (char === ':') {
                // PropType: Recognize prop type
                tokens.push({ type: 'PropType', value: this.readWhile(/[a-zA-Z_]/) });
            }
            else if (char === '{' || char === '}') {
                // ComponentBody: Recognize component body
                tokens.push({ type: 'ComponentBody', value: char });
            }
            this.position++; // Move to the next character
        }
        return tokens; // Return the array of generated tokens
    }
    // Helper function to read characters while a given predicate is true
    readWhile(predicate) {
        let result = '';
        while (this.position < this.input.length &&
            predicate.test(this.input[this.position])) {
            result += this.input[this.position]; // Append the current character to the result
            this.position++; // Move to the next character
        }
        return result; // Return the accumulated characters
    }
}
const inputCode = `
@ComponentName
props {
  propName1: PropType1,
  propName2: PropType2,
}
{
  // Component body
}

@AnotherComponent
props {
  // No props defined
}
{
  // Component body with no props
}
`;
const lexer = new Lexer(inputCode);
// Tokenize input code
const tokens = lexer.lex();
// Output tokens for analysis
console.log(tokens);
// TODO: Analyze tokens to verify lexer functionality
export default Lexer;
