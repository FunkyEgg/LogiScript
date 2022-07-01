package lang;

function tokenize(fileContents: String): Array<String> {
    var lines = fileContents.split('\r\n');
    var noCommentsArray: Array<String> = [];
    var noCommentsString: String;

    for (line in lines)
        if (!StringTools.startsWith(line, '//'))
            noCommentsArray.push(line);

    noCommentsString = noCommentsArray.join('');
    noCommentsString = StringTools.replace(noCommentsString, '(', ' ');
    noCommentsString = StringTools.replace(noCommentsString, ')', ' ');

    return noCommentsString.split(' ').filter(line -> line != '');
}