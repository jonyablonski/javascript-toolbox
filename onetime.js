// create a one-time event
var onetime = function (node, type, callback) {

    // create event
    node.addEventListener(type, function(e) {
        // remove event
        e.target.removeEventListener(e.type, arguments.callee);
        // call handler
        return callback(e);
    });

};

//onetime(document.getElementById("myelement"), "click", handler);