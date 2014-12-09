function FunctionPlayground(){
    for (var i = 0; i < arguments.length; i++) {
        console.log("Number: "+ (i+1));
        console.log("Type: "+typeof (arguments[i]));
        console.log(""+this);
    }
    console.log();
}
var func = function(){
    var person = {};
    person.name = "Tosho";
    return person;
};
FunctionPlayground("Pesho", "Gosho", "Svetlio");
FunctionPlayground(func().name, "age", 12);
FunctionPlayground(this);

FunctionPlayground.call(null,123,123);
FunctionPlayground.call(123,13,13);

FunctionPlayground.apply(null,[2,"me",4]);
FunctionPlayground.apply("apply",[1,2,3]);