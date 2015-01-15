(function () {
    "use strict";

    (function () {
        require.config({
            paths: {
                "TODOListModule": "script/TODOListModule"
            }
        });
    }());

    require(["TODOListModule"], function (factory) {
        factory.Container("Thursday TODO List");
    });
}());