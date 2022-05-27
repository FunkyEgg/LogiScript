import { LogiFile } from './LogiLang/file.ts';

let testFile: LogiFile = new LogiFile('');

console.log(Deno.readFileSync(testFile.fileLocation));