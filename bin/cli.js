#!/usr/bin/env node

const MESSAGE = 'Hello Cloud Native Days France 2026!';

const args = process.argv.slice(2);

if (args.includes('--json') || args.includes('-j')) {
  console.log(JSON.stringify({ message: MESSAGE }));
} else if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Usage: cloud-native-hello [options]

Options:
  -j, --json    Output as JSON
  -h, --help    Show this help message
  -v, --version Show version number

Cloud Native Days France 2026 - Trusted Publishing Demo
`);
} else if (args.includes('--version') || args.includes('-v')) {
  const pkg = require('../package.json');
  console.log(pkg.version);
} else {
  console.log(MESSAGE);
}
