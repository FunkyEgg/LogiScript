export function argParser(): string {
    let fileLoc: string = 'NULL';

    let i = 0;
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

    return fileLoc;
}