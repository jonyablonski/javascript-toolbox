/**
 * handleEvent
 * Take an object as a second argument
 * Look for a method called "handleEvent"
 * Call handleEvent method
 * Ref: http://www.thecssninja.com/javascript/handleevent
 */
var object = {
	init: function() {
		button.addEventListener("click", this, false);
		button.addEventListener("touchstart", this, false);
	},
	handleEvent: function(e) {
		switch(e.type) {
			case "click":
				this.action();
				break;
			case "touchstart":
				this.action();
				break;
		}
	},
	action: function() {
		alert("Clicked or touched!");
	}
};

// Init
object.init();