var specialConsole = (function SpecialConsole() {
    function FormatText() {
        if (arguments.length == 1) {
            return arguments[0];
        }
        else if (arguments.length == 0) {
            return "";
        }

        var text = arguments[0];
        var whichArgument = 1;
        var pattern = /{\d+}/;
        while (text.match(pattern)) {
            text = text.replace(pattern, arguments[whichArgument++].toString());
        }
        return text;
    }

    function WriteLine() {
        console.log(FormatText.apply(this,arguments));
    }

    function WriteWarning() {
        console.warn(FormatText.apply(this,arguments));
    }

    function WriteError() {
        console.error(FormatText.apply(this,arguments));
    }


    return {
        writeLine: WriteLine,
        writeWarning: WriteWarning,
        writeError: WriteError
    };
})();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");