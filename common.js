function changeUrl(urlAddr) {
    var root = window.location.protocol+'//'+window.location.host+'/';
    alert('path1='+ root);
    var pathanme = window.location.pathname;
    var pathArray = pathanme.split("/");
    var path = pathArray[pathArray.length-2];	
    alert('path2='+ path);
    root = root + path + '/' + urlAddr + '?ts=' + Date.now();
    alert('path3='+ root);
    window.location.href = root;
}

function directUrl(urlAddr) {
    window.open(urlAddr, '_blank');
}	