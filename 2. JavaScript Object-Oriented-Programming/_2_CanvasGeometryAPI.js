var API = (function () {
    var hideShapes = function () {
        var selectAdvancedOptions = [];

        selectAdvancedOptions[0] = document.getElementsByClassName("rectangle")[0].style;
        selectAdvancedOptions[1] = document.getElementsByClassName("triangle")[0].style;
        selectAdvancedOptions[2] = document.getElementsByClassName("segment")[0].style;
        selectAdvancedOptions[3] = document.getElementsByClassName("point")[0].style;

        for(var i = 0; i<selectAdvancedOptions.length; i++) {
            selectAdvancedOptions[i].display = "none";
        }

        return hideShapes;
    };

    var changeShape = function () {
        hideShapes();

        var selectMenu = document.getElementById("choseShape").value;
        var selectedOption = document.getElementsByClassName(selectMenu)[0].style;
        selectedOption.display = "block";

        return changeShape;
    };

    var hideAdvancedOptions = function () {
        hideShapes();

        return hideAdvancedOptions;
    };

    var createShape = function () {
        var x = document.getElementById("coordX").value,
            y = document.getElementById("coordY").value,
            color = document.getElementById("color").value,
            width = document.getElementById("rectangleWidth").value,
            height = document.getElementById("rectangleHeight").value,
            x2 = document.getElementById("triangleX2").value || document.getElementById("segmentX2").value,
            y2 = document.getElementById("triangleY2").value || document.getElementById("segmentY2").value,
            x3 = document.getElementById("triangleX3").value,
            y3 = document.getElementById("triangleY3").value;
        var shape,
            listElement = document.createElement("div"),
            listShapes = document.getElementsByClassName("listShapes")[0];

        listElement.setAttribute("class", "listElement");
        listElement.addEventListener('click', function() {new MoveShape.ClickedElement(this); new MoveShape.MarkElement});

        switch(document.getElementById("choseShape").value) {
            case "rectangle":
                shape = new Shapes.Rectangle(x, y, color, width, height);
                listElement.innerHTML = shape.toString();
                listShapes.appendChild(listElement);
                break;
            case "point":
                shape = new Shapes.Point(x, y, color);
                listElement.innerHTML = shape.toString();
                listShapes.appendChild(listElement);
                break;
            case "triangle":
                shape = new Shapes.Triangle(x, y, color, x2, y2, x3, y3);
                listElement.innerHTML = shape.toString();
                listShapes.appendChild(listElement);
                break;
            case "segment":
                shape = new Shapes.Segment(x, y, color, x2, y2);
                listElement.innerHTML = shape.toString();
                listShapes.appendChild(listElement);
                break;
        }
        
        new ZindexRedrawing.Redrawing;

        return createShape;
    };

    return {
        changeShape: changeShape,
        hideAdvancedOptions: hideAdvancedOptions,
        createShape: createShape
    };
})();
