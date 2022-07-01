package;

import haxe.Json;
import sys.io.File;

import lang.*;
import repl.Launch;
import constants.Types;

class Main {
    public static function main() {
        var info: InfoJson = Json.parse(File.getContent('./info.json'));

        launchRepl(info);
    }
}