var makeCharlieBrownDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('charlieBrown');
};
makeCharlieBrownDancer.prototype = Object.create(makeDancer.prototype);
makeCharlieBrownDancer.prototype.constructor = makeCharlieBrownDancer;

makeCharlieBrownDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};