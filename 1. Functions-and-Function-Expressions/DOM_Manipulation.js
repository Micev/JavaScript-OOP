var domManipulator = (function () {
    function addElement(parent, elementToAdd, contentText) {
        var parentElement = document.querySelector(parent);
        var newElement = document.createElement(elementToAdd);
        var newElementTextContent = document.createTextNode(contentText);
        newElement.appendChild(newElementTextContent);
        parentElement.appendChild(newElement);
    }

    function removeElement(parent, elementToRemove) {
        var parentElement = document.querySelector(parent);
        var child = document.querySelector(elementToRemove);
        parentElement.removeChild(child);
    }

    function getElements(selector) {
        var elements = document.querySelectorAll(selector);
        return elements;
    }

    return {addElement: addElement, removeElement: removeElement, getElements: getElements};
})();