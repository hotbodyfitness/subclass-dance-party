var makeCharlieBrownDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.html('<span class="cbd"> <img src="images/cbd.gif"></span>');
  // this.$node.addClass('cbd');
};
makeCharlieBrownDancer.prototype = Object.create(makeDancer.prototype);
makeCharlieBrownDancer.prototype.constructor = makeCharlieBrownDancer;

makeCharlieBrownDancer.prototype.step = function() {
  // makeDancer.prototype.step.call(this);
  this.$node.fadeIn();
  this.$node.toggle();
};