export function tokenize(fileContents: string): string[] {
    let lines = fileContents.split('\r\n');

    let noComments: string[] = [];

    for (let line in lines)
        if (!lines[line].startsWith('//'))
            noComments.push(lines[line]);

    return noComments.join("")
        .replaceAll('(', ' ')
        .replaceAll(')', ' ')
        .split('(' && ' ')
        .filter(line => line != "");
}