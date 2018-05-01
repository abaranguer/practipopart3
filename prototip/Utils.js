var pr = function (msg) {
    document.writeln(msg);
}

var isInArray = function (codi, array) {
    var trobat = false;
    for (var i = 0; i < array.length; i++) {
        if (codi == array[i]) {
            trobat = true;
            break;
        }
    }
    return trobat;
}
