// Creates and returns a new dancer object that can step
/*
we want to refactor from fucntiuonal to pseudoclassical
change variables (dancer and styleSettings) to properties using this keyword
convert dancer.step to a prototype method
convert setPosition to a prototype method
*/

var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
  this.setPosition(top, left);

};
  // use jQuery to create an HTML <span> tag
  // dancer.$node = $('<span class="dancer"></span>');

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 0
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.interact = function() {
  this.$node.fadeOut('slow');
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body

