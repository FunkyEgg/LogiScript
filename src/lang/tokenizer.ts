export function tokenize(fileContents: string): string[] {
    let lines = fileContents.split('\r\n');

    let noComments: string[] = [];

    // for (let line in lines)
    //     if (!lines[line].startsWith('//'))
    //         noComments.push(lines[line]);
    
    lines.forEach(line => {
        if (!line.startsWith('//'))
            noComments.push(line);
    });

    return noComments.join("")
        .replaceAll('(', ' ')
        .replaceAll(')', ' ')
        .split(' ')
        .filter(line => line != "");
}