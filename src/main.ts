import { runCli } from './cli/interface.ts';
import { tokenize } from './lang/tokenizer.ts';
import { File } from './constants/file.ts';

// TODO Make file location a arg
const file = new File('../dev/dev.logi');

console.log(tokenize(file.fileContents));

// running the cli is the last thing to do
runCli();