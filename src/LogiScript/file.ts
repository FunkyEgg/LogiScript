export class LogiFile {
    fileLocation: string;
    constructor(fileLocation: string) {
        this.fileLocation = fileLocation;
    }

    fileContents() {
        return Deno.readTextFileSync(this.fileLocation);
    }
}