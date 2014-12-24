var ZindexRedrawing = (function () {
    var Redrawing = function () {
        var elements = document.getElementsByClassName("listElement");
        for (var i = elements.length - 1; i >= 0; i--) {
            var obj = JSON.parse(elements[i].innerHTML.split(": ")[1]);
            draw(elements[i].innerHTML.split(":")[0], obj);
        }

        return Redrawing;
    };

    var draw = function (shape, obj) {
        var shapeConstructor;
        switch (shape) {
            case "Rectangle":
                shapeConstructor = new Shapes.Rectangle(parseInt(obj.x), parseInt(obj.y), obj.color, parseInt(obj.width), parseInt(obj.height));
                break;
            case "Segment":
                shapeConstructor = new Shapes.Segment(parseInt(obj.x), parseInt(obj.y), obj.color, parseInt(obj.x2), parseInt(obj.y2));
                break;
            case "Triangle":
                shapeConstructor = new Shapes.Triangle(parseInt(obj.x), parseInt(obj.y), obj.color, parseInt(obj.x2),
                    parseInt(obj.y2), parseInt(obj.x3), parseInt(obj.y3));
                break;
            case "Point":
                shapeConstructor = new Shapes.Point(parseInt(obj.x), parseInt(obj.y), obj.color, 3, 3);
                break;
        }

        shapeConstructor.draw();

        return draw;
    };

    return {
        Redrawing: Redrawing
    }
}());
