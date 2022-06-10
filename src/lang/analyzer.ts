export function analyze(tokens: string[]): void {
    let skipIter = false;

    let i = 0;

    while (i < tokens.length) {
        let token = tokens[i];

        switch (token) {
            case 'gate': {
                if (parseInt(tokens[i+2]) <= 0) {
                    console.log(`Can't asign ${tokens[i+2]} to a number of inputs`);
                    Deno.exit(-1);
                }

                recAnalyzeGate(tokens, i, parseInt(tokens[i+2]));
                
                break;
            }

            case 'comp': {
                if (parseInt(tokens[i+2]) <= 0) {
                    console.log(`Can't asign ${tokens[i+2]} to a number of inputs`);
                    Deno.exit(-1);
                }

                recAnalyzeComp(tokens, i, parseInt(tokens[i+2]));

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

// recursive analyze function for a gate
function recAnalyzeGate(tokens: string[], iter: number, numOfInputs: number) {
    let i = iter+2;

    while (i < tokens.length) {
        let token = tokens[i];

        // TODO

        switch (token) {
            case 'not': {

            }

            default: {
                console.log(`${token} is not a valid token in this context`);
                Deno.exit(-1);
            }
        }
    }
}

// recursive analyze function for a component
function recAnalyzeComp(tokens: string[], iter: number, numOfInputs: number) {
    let i = iter+2;

    while (i < tokens.length) {
        let token = tokens[i];

        // TODO

        switch (token) {
            default: {
                console.log(`${token} is not a valid token in this context`);
                Deno.exit(-1);
            }
        }
    }
}