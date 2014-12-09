function traverse(selector) {
    var element = document.querySelector(selector);

   traverseNode(element,'    ')

    function traverseNode(element, spacing){
        spacing = spacing || '  ';

        var nodeId = element.getAttribute("id");
        var nodeClass = element.getAttribute("class");
        var result = spacing + element.nodeName.toLocaleLowerCase() + ": ";

        if (nodeId) {
            result += 'id="' + nodeId + '"';
        }
        if (nodeClass) {
            result += 'class="' + nodeClass + '"';
        }
        console.log(result);
        for (var i = 0; i < element.childNodes.length; i++) {
            var child = element.childNodes[i];
            if (child.nodeType == document.ELEMENT_NODE) {
                traverseNode(child, spacing + '   ');
            }
        }
    }
}
var selector = ".birds";
traverse(selector);
