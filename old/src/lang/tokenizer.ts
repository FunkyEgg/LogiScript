export function tokenize(fileContents: string): string[] {
    const lines = fileContents.split('\r\n');

    const noComments: string[] = [];

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