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