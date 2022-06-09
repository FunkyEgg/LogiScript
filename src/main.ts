import { runCli } from './cli/interface.ts';
import { tokenize } from './lang/tokenizer.ts';
import { File } from './constants/file.ts';
import { analyze } from './lang/analyzer.ts';

// TODO Make file location a arg
const file = new File('../dev/dev.logi');

const tokens = tokenize(file.fileContents);
console.log(tokens);

analyze(tokens);

// running the cli is the last thing to do
runCli();