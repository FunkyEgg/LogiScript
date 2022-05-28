import info from './info.json' assert { type: 'json' }

import { LogiFile } from './LogiScript/file.ts';
import { argParser } from './LogiScript/parser.ts'

let fileLoc = argParser();

const file = new LogiFile(fileLoc);
const fileContents = file.fileContents();

// console.log(`File location: ${file.fileLocation}\nFile contents:\n${fileContents}`);

console.clear();
console.log(`Using logiscript version ${info.version}, on the ${info.stream} stream`);

let exit = false;
while (!exit) {
    const input = prompt('> ');

    if (input == 'exit()') exit = true;
}