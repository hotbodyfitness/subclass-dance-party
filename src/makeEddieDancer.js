var makeEddieDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.html('<span class="eddie"> <img src="images/eddie.gif"></span>');
  // this.$node.addClass('eddie');
};

makeEddieDancer.prototype = Object.create(makeDancer.prototype);
makeEddieDancer.prototype.constructor = makeEddieDancer;

makeEddieDancer.prototype.step = function() {
  // makeDancer.prototype.step.call(this);
  this.$node.toggle();
  this.$node.mouseover();
  this.$node.fadeIn();
};