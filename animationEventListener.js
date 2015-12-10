var pfx = ["webkit", "moz", "MS", "o", ""];
function prefixedEventListener(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
}

// var monkey = document.querySelector("#monkey");
// prefixedEventListener(monkey,"AnimationStart",function(e){
//     console.log("log at beginning of monkey animation");
// });