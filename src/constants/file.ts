export class File {
    private p_fileLoc: string;
    private p_fileContents: string;

    constructor(fileLocation: string) {
        const decoder = new TextDecoder('utf-8');

        this.p_fileLoc = fileLocation;

        this.p_fileContents = decoder.decode(Deno.readFileSync(this.p_fileLoc));
    }

    public get fileContents() { return this.p_fileContents }
}