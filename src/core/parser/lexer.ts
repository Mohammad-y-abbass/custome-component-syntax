import { createToken, Lexer } from 'chevrotain';

const ComponentName = createToken({ name: 'ComponentName', pattern: /@\w+/ });
const Assign = createToken({ name: 'Assign', pattern: /=/ });
const LCurly = createToken({ name: 'LCurly', pattern: /{/ });
const RCurly = createToken({ name: 'RCurly', pattern: /}/ });
const HTMLContent = createToken({ name: 'HTMLContent', pattern: /<[^>]+>/ });
const WhiteSpace = createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});

const allTokens = [
  WhiteSpace,
  ComponentName,
  Assign,
  LCurly,
  RCurly,
  HTMLContent,
];
