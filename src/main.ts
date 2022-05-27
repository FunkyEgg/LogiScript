import { LogiFile } from './LogiLang/file.ts';

let fileLoc: string = 'NULL';

let i: number = 0;
while (i < Deno.args.length) {
    if (Deno.args[i] == '--file' || '-f') {
        fileLoc = Deno.args[i + 1];
        i++;
    } else {
        console.log(`Argument ${Deno.args[i]} is not a valid argument`);
        Deno.exit(-1);
    }

    i++;
}

const file = new LogiFile(fileLoc);
const fileContents = file.fileContents();

console.log(`File location: ${file.fileLocation}\nFile contents: ${fileContents}`);