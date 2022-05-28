import { LogiFile } from './LogiLang/file.ts';
import { argParser } from './LogiLang/parser.ts'

let fileLoc = argParser();

const file = new LogiFile(fileLoc);
const fileContents = file.fileContents();

console.log(`File location: ${file.fileLocation}\nFile contents:\n${fileContents}`);