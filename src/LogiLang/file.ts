import {
    ensureFileSync,
    detect
} from 'https://deno.land/std@0.141.0/fs/mod.ts';

export class LogiFile {
    fileLocation: string;
    constructor(fileLocation: string) {
        this.fileLocation = fileLocation;
    }

    fileContents() {

    }
}