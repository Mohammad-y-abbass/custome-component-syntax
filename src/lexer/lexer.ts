// Define token types
export enum TokenType {
  ComponentDeclaration = 'ComponentDeclaration',
  LCurly = 'LCurly',
  RCurly = 'RCurly',
  HTMLContent = 'HTMLContent',
  WhiteSpace = 'WhiteSpace',
}

// Token interface
export interface Token {
  type: TokenType;
  value: string;
}

// Define lexer function
export function lexer(input: string): Token[] {
  const tokens: Token[] = [];

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
