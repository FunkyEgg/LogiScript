export function tokenize(fileContents: string): string[] {
    return fileContents
        .replaceAll('\r\n', '')
        .replaceAll('(', ' ')
        .replaceAll(')', ' ')
        .split('(' && ' ')
        .filter(line => line != "");
}