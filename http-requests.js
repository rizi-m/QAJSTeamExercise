const getRequest = function(url, onload) 
{
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseText = 'json';
    request.onload = () => onload(request.response);
    request.send();
};

const postRequest = function(url, data, onload) {
    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-type','application/json;charset=utf-8');
    request.onload = () => onlaod(request.responseText);
    request.send(data);
}

const putRequest = function(url, id, data, onload) {
    url = url + "/" + id;
    const request = new XMLHttpRequest();
    request.open('PUT', url, true);
    request.setRequestHeader('Content-type','application/json;charset=utf-8');
    request.onload = () => onload(request.responseText)
    request.send(data);
};

const deleteRequest = function(url, id, onload) {
    url = url + "/" + id;
    const request = new XMLHttpRequest();
    request.open('DELETE', url, true);
    request.onload = () => onload(request.responseText)
    request.send();
};