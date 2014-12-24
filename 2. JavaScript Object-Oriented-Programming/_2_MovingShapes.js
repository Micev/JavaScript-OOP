var MoveShape = (function () {
    var ClickedElement = function (target) {
        var elements = document.getElementsByClassName("listElement");
        var index;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] == target) {
                index = i;
            }
        }

        ClickedElement.prototype = {
            thisElement: function () {
                var indexing = {
                    index: index
                };

                return indexing;
            }
        };

        return ClickedElement;
    };

    var ShapeUp = function () {
        var elements = document.getElementsByClassName("listElement");
        var selectedIndex;

        for (var i = 0; i < elements.length; i++) {
            if (elements[i].className == "listElement selectedListElement") {
                selectedIndex = i;
            }
        }

        if (selectedIndex) {
            var selectedElement = document.getElementsByClassName("selectedListElement")[0],
                aboveTheSelectedElement = document.getElementsByClassName("listElement")[selectedIndex - 1],
                selectedElementHtml = document.getElementsByClassName("selectedListElement")[0].innerHTML;

            selectedElement.innerHTML = aboveTheSelectedElement.innerHTML;
            selectedElement.className = "listElement";
            aboveTheSelectedElement.innerHTML = selectedElementHtml;
            aboveTheSelectedElement.className = aboveTheSelectedElement.className + " selectedListElement";

            new ZindexRedrawing.Redrawing();
        }

        return ShapeUp;
    };

    var ShapeDown = function () {
        var elements = document.getElementsByClassName("listElement");
        var selectedIndex;

        for (var i = 0; i < elements.length; i++) {
            if (elements[i].className == "listElement selectedListElement") {
                selectedIndex = i;
            }
        }

        if (selectedIndex != elements.length - 1) {
            var selectedElement = document.getElementsByClassName("selectedListElement")[0],
                bottomTheSelectedElement = document.getElementsByClassName("listElement")[selectedIndex + 1],
                selectedElementHtml = document.getElementsByClassName("selectedListElement")[0].innerHTML;

            selectedElement.innerHTML = bottomTheSelectedElement.innerHTML;
            selectedElement.className = "listElement";
            bottomTheSelectedElement.innerHTML = selectedElementHtml;
            bottomTheSelectedElement.className = bottomTheSelectedElement.className + " selectedListElement";

            new ZindexRedrawing.Redrawing();
        }

        return ShapeDown;
    };

    var MarkElement = function () {
        MarkElement.prototype.thisElement = function () {
            var thisElement = ClickedElement.prototype.thisElement.call(this);

            return thisElement;
        };

        var elements = document.getElementsByClassName("listElement");
        for (var i = 0; i < elements.length; i++) {
            elements[i].className = "listElement";
        }

        elements[this.thisElement().index].className = elements[this.thisElement().index].className + " selectedListElement";

        return MarkElement;
    };

    return {
        ShapeUp: ShapeUp,
        ShapeDown: ShapeDown,
        ClickedElement: ClickedElement,
        MarkElement: MarkElement
    }
}());
