Object.prototype.extends = function (parent) {
    if (!Object.create) {
        Object.prototype.create = function (proto) {
            function F() {
            };
            F.prototype = proto;
            return new F();
        };
    }
    ;

    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};


var Shape = (function () {
    var Shape = function (x, y, color) {

        this._x = x;
        this._y = y;
        this._color = color;
        if (this._x < 0 ) {
            throw new RangeError(x,"value must  be positive.");
        }
        if(this._y < 0){
            throw new RangeError(y,"value must be positive.");
        }
    };

    Shape.prototype = {
        toString: function () {
            return "x= " + this._x + ", y= " + this._y + ", Color: " + this._color;
        },
        canvas: function () {

            var canvas = document.getElementById("shape").getContext("2d");

            return canvas;
        }
    };
    return Shape;
}());

var Circle = (function () {


    var Circle = function (x, y, color, r) {
        Shape.call(this, x, y, color);
        this._r = r;
        if(this._r <=0){
            throw new RangeError(r,"value must be positive number");
        }
    };

    Circle.extends(Shape);

    Circle.prototype.draw = function () {
        this.canvas().beginPath();
        this.canvas().arc(this._x, this._y, this._r, 0, 2 * Math.PI);
        this.canvas().fillStyle = this._color;
        this.canvas().fill();
    };

    Circle.prototype.toString = function () {
        return "Circle: "+Shape.prototype.toString.call(this) + ", Radius: " + this._r;
    };

    return Circle;

}());

var Rectangle = (function () {


    var Rectangle = function (x, y, color, width, height) {
        Shape.call(this, x, y, color);
        this._width = width;
        this._height = height;

        if (this._width<= 0 ) {
            throw new RangeError(width,"value must  be positive.");
        }
        if(this._height <= 0){
            throw new RangeError(height,"value must be positive.");
        }
    };

    Rectangle.extends(Shape);

    Rectangle.prototype.draw = function () {
        this.canvas().beginPath();
        this.canvas().rect(this._x, this._y, this._width, this._height);
        this.canvas().fillStyle = this._color;
        this.canvas().fill();
    };

    Rectangle.prototype.toString = function () {
        return "Rectangle: "+Shape.prototype.toString.call(this) +
            ", Width: " + this._width + "Height: " + this._height;
    };

    return Rectangle;
}());

var Triangle = ( function () {

    function validateTriangle(x1, y1, x2, y2, x3, y3) {

        var SIDES = {
            a: Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)),
            b: Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)),
            c: Math.sqrt((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1))
        };

        if (SIDES.a + SIDES.b > SIDES.c &&
            SIDES.b + SIDES.c > SIDES.a &&
            SIDES.a + SIDES.c > SIDES.b) {
            return true;
        }
        return false;
    }

    var Triangle = function (x, y, color, x1, y1, x2, y2) {
        Shape.call(this, x, y, color);
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;

        if(!validateTriangle(x, y, x1, y1, x2, y2)){
            throw new Error("Invalid Triangle")
        }
    };

    Triangle.extends(Shape);

    Triangle.prototype.draw = function () {
        this.canvas().beginPath();
        this.canvas().moveTo(this._x, this._y);
        this.canvas().lineTo(this._x1, this._y1);
        this.canvas().lineTo(this._x2, this._y2);
        this.canvas().fillStyle = this._color;
        this.canvas().fill();


    };

    Triangle.prototype.toString = function () {
        return "Triangle: "+ Shape.prototype.toString.call(this) +
            ", x1= " + this._x1 + ", y1= " + this._y1 +
            ", x2= " + this._x2 + ", y2= " + this._y2;
    };

    return Triangle;
}());

var Segment = ( function () {


    var Segment = function (x, y, color, x1, y1) {
        Shape.call(this, x, y, color);
        this._x1 = x1;
        this._y1 = y1;


        if (this._x1<= 0 ) {
            throw new RangeError(x1,"value must  be positive.");
        }
        if(this._y1 <= 0){
            throw new RangeError(y1,"value must be positive.");
        }
    };

    Segment.extends(Shape);

    Segment.prototype.draw = function () {
        this.canvas().beginPath();
        this.canvas().moveTo(this._x, this._y);
        this.canvas().lineTo(this._x1, this._y1);
        this.canvas().strokeStyle = this._color;
        this.canvas().lineWidth = "4";
        his.canvas().stroke();
    };

    Segment.prototype.toString = function () {
        return "Segment: "+ Shape.prototype.toString.call(this) +
            ", x1= " + this._x + ", y1= " + this._y1;
    };

    return Segment;
}());

var Point = (function () {

    var Point = function (x, y, color) {
        Shape.call(this, x, y, color);
    };

    Point.extends(Shape);

    Point.prototype.draw = function () {
        this.canvas().beginPath();
        this.canvas().arc(this._x, this._y, 1, 0, 2 * Math.PI, true);
        this.canvas().fill();
    };

    Point.prototype.toString = function () {
        return "Point: "+Shape.prototype.toString.call(this);
    };

    return Point;

}());

var circle = new Circle(2, 2, "#0A1", 12);
console.log(circle.toString());

var rectangle = new Rectangle(5, 5, "#AB8", 12, 12);
console.log(rectangle.toString());

var triangle = new Triangle(10, 14, "#921", 17, 4, 22, 25);
console.log(triangle.toString());

var segment = new Segment(1, 9, "#674", 1, 34);
console.log(segment.toString());

var point = new Point(0, 0, "#CCC");
console.log(point.toString());





