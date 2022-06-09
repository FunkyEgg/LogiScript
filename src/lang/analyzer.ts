const keywords = ['gate', 'comp']

export function analyze(tokens: string[]): void {
    let skipIter = false;

    let i = 0;

    while (i < tokens.length) {
        let token = tokens[i];

        switch (token) {
            case 'gate' || 'comp': {
                if (parseInt(tokens[i+2]) <= 0) {
                    console.log(`Can't asign ${tokens[i+2]} to a number of inputs`);
                    Deno.exit(-1)
                }

                let numOfInputs = tokens[i+2];
                let i2 = i+2;

                while (i2 < tokens.length) {
                    let token = tokens[i2]

                    switch (token) {
                        default: {
                            console.log(`${token} is not a valid token in this context`);
                            Deno.exit(-1)
                        }
                    }
                }

                break;
            }

            default: {
                console.log(`You must start by declaring`);
                Deno.exit(-1);
            }
        }

        i++;
    }
}