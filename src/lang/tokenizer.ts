export function tokenize(fileContents: string): string[] {
    let lines = fileContents.split('\r\n');

    let noComments: string[] = [];

    for (let line in lines)
        if (!line.includes('//'))
            noComments.push(lines[line]);

    console.log(noComments);

    return noComments.join("")
        .replaceAll('(', ' ')
        .replaceAll(')', ' ')
        .split('(' && ' ')
        .filter(line => line != "");
}