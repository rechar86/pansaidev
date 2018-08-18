function changeUrl(urlAddr) {
    var root = window.location.protocol + '//' + window.location.host;
    alert('path1='+ root);
    var pathanme = window.location.pathname;
    var pathArray = pathanme.split("/");
var path = pathArray[pathArray.length-2];	
    alert('path='+ path);
    root = root + path;
root = root + '/' + urlAddr + '?ts=' + Date.now();
alert('path2='+ root);
window.location.href = root;
}

function directUrl(urlAddr) {
    window.open(urlAddr, '_blank');
}	