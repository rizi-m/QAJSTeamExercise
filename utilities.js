const createElement = function(tag, innerHtml, id) {
    let element = document.createElement(tag);
    element.innerHTML = innerHtml;
    element.id = id;
    return element;
}