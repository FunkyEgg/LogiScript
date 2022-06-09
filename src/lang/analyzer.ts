const keywords = ['gate', 'comp']

export function analyze(tokens: string[]): void {
    let skipIter = false;

    let i = 0;

    for (let _i in tokens) {
        if (skipIter) {
            skipIter = false;
            continue;
        }
        
        let token = tokens[i];

        switch (token) {
            case 'gate' || 'comp': {
                if (parseInt(tokens[i + 2]) <= 0) {
                    console.log(`Can't asign ${tokens[i + 2]} to a number of inputs`);
                    Deno.exit(-1)
                }
                break;
            }

            default: {
                console.log(`${token} Is a invalid token`);
                Deno.exit(-1);
            }
        }

        i++;
    }
}