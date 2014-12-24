var RemovingShape = (function() {
    var Remove = function () {
        var removeTarget = document.getElementsByClassName("selectedListElement")[0];
        var parent = document.getElementsByClassName("listShapes")[0];

        var canvasArea = document.getElementById("shapesContainer").getContext("2d");
        canvasArea.clearRect(0, 0, 500, 400);

        parent.removeChild(removeTarget);
        new ZindexRedrawing.Redrawing;

        return Remove;
    };

    return {
        Remove: Remove
    }
}());
