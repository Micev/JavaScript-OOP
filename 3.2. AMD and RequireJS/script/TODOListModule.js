Object.prototype.extend = function(patern){
    this.prototype = Object.create(patern.prototype);
    this.prototype.constructor = this;
};

Object.prototype.isEmptyString = function(value, varable){
    if(value == "" || typeof (value)!= "string"){
        throw new Error(varable + "must be non-empty string.");
    }
};

//create functionality
var addNewSection = function addNewSection() {
    var title = document.getElementById("newSectionField").value;
    var newSection = new TodoListModule.Section(title);
    newSection.addToDOM();
};

var addNewItem = function addNewItem(target, inputId) {
    var content = document.getElementById(inputId).value;
    var newItem = new TodoListModule.Item(content);
    newItem.addToDOM(target);
};

var changeStatus = function changeStatus(target) {
    if (target.classList[1] == "checked") {
        target.className = "content";
    } else {
        target.className += " checked";
    }
};

//create model
var TodoListModule = (function(){

    var ListModuleElement = (function(){
       var ListModuleElement = function(title) {
           this.setTitle(title);
       };

        ListModuleElement.prototype.getTitle = function(){
            return this._title;
        };
        ListModuleElement.prototype.setTitle = function(title){
            this.isEmptyString(title, "title");
            this._title = title;
        };

        return ListModuleElement;
    }());

    // create Container
    var Container = (function(){
        var Container = function(title, section){
            ListModuleElement.call(this, title);
            this._section = section;
        };

        Container.extend(ListModuleElement);

        Container.prototype.addSection = function(section){
            this._section.push(section);
        };

        Container.prototype.addToDOM = function(){
            var select = document.getElementById("wrapper");
            var newElement = document.createElement("div");
            newElement.innerHTML =
                '<div id="container">' +
                    '<h1>'+this.getTitle() + '</h1>' +
                    '<div id= "section"></div>' +
                    '<input type="text" id="newSectionField" placeholder="Title..."/>'+
                    '<button class="addSection" onclick="addNewSection()">New Section</button>'+
                '</div>';
            select.appendChild(newElement);
        };

        return Container;
    }());

    //create Section
    var Section = (function(){
        var index = 0;
        var Section = function(title, items){
            ListModuleElement.call(this, title);
            this._items = items;
            index++;
        };

        Section.extend(ListModuleElement);

        Section.prototype.addItem = function(item){
            this._items.push(item);
        };

        Section.prototype.addToDOM = function(){
            var select = document.getElementById("section");
            var newElement = document.createElement("div");
            newElement.innerHTML =
                '<section  id="section' + index + '">' +
                '<h2>' + this.getTitle() + '</h2>' +
                '</section>' +
                '<div class="addItem">' +
                '<input type="text" id="newItemField' + index + '" placeholder="Add item..." />' +
                '<button href="#" class="addNewItem" onclick="addNewItem(\'section' + index + '\', \'newItemField' + index + '\')" >+</button>' +
                '</div>';
            select.appendChild(newElement);
        };

        return Section;
    })();

    //create Item
    var Item = (function(){
        var index = 0;
        var Item = function(title){
            ListModuleElement.call(this, title);
            index++;
        }

        Item.extend(ListModuleElement);

        Item.prototype.addToDOM = function(select){
            var select = document.getElementById(select);
            var newElement = document.createElement("div");
            newElement.innerHTML =
                '<div class="contentBox">' +
                '<input onclick="changeStatus(content' + index + ')" type="checkbox"  />' +
                '<div class="content" id="content' + index + '">' + this.getTitle() + '</div>' +
                '</div>';
            select.appendChild(newElement);

        };

        return Item;
    })();

    return{
        ListModuleElement : ListModuleElement,
        Container : Container,
        Section : Section,
        Item : Item
    };
}());
