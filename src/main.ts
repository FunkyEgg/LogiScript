import { runCli } from './cli/interface.ts';


function recTest(fromRec: boolean) {
    if (!recTest) {
        recTest(true);
        console.log('1')
    } else {
        console.log('2')
    }
}

recTest(false);

// running the cli is the last thing to do
runCli();