// class def
// function ScrollCheese (el, settings) {
//   this.wrapper = $(el);

//   this.settings = $.extend({
//     overflowId: "overflow",
//     wrapperStyles: {
//       position: "fixed",
//       left: 0, 
//       right: 0, 
//       top: 0, 
//       //bottom: 0,
//       width: "auto", 
//       height: "auto",
//       overflow: "hidden"
//     },
//     scrollEl: $(window),
//     easing: Power2.easeOut,
//     scrollTime: function(prev, next) { return 0.5; }
//   }, settings);

//   if (!this.overflow)
//     this.createOverflow();

//   this.wrapper.css(this.settings.wrapperStyles);

//   this.curPos = this.settings.scrollEl.scrollTop();
//   var _this = this;
//   this.settings.scrollEl.bind("scroll", function() {
//     _this.updatePosition(_this.settings.scrollEl.scrollTop());
//   });
//   this.updatePosition(this.curPos);

//   this.settings.scrollEl.bind("resize", function() {
//     _this.updateSize();
//   });
// }

// ScrollCheese.prototype.updatePosition = function(pos) {
//   //TweenMax.to(this.wrapper, this.settings.scrollTime(this.curPos, pos), {scrollTo:{y:pos}, ease: this.settings.easing});
//   if (this.animating)
//     this.animating.kill();

//   this.animating = TweenMax.to(this.wrapper, this.settings.scrollTime(this.curPos, pos), {y:pos*-1, z:0.01, ease: this.settings.easing});
//   //this.wrapper.css({transform: "translate3d(0px, "+pos*-1+"px, 0px)"});
//   this.curPos = pos;
// }

// ScrollCheese.prototype.createOverflow = function() {
//   var overflow = $("<div>");
  
//   this.wrapper.after(overflow);
//   this.overflow = overflow;
//   this.updateSize();

//   return this.overflow;
// }

// ScrollCheese.prototype.updateSize = function() {
//   if (!this.overflow)
//     this.createOverflow();

//   var h = this.wrapper.outerHeight();
//   this.overflow.height(h + "px");
//   this.overflow.attr("id", this.settings.overflowId);
// }



// $.fn.scrollCheese = function(options) {
//   return this.each(function(){
//     return new ScrollCheese(this, options);
//   });
// };


//$("#wrapper").scrollCheese();

$("a[href^=#]").click(function(e) {
  e.preventDefault();
  var $e = $(e.target.hash);

  if (!$e)
    return;

  TweenMax.to(window, 2.5, {scrollTo:{y:$e.offset().top}, ease:Power2.easeInOut});
});


$(document).ready(function() {

  if ($(window).width() > 768) {

    // insert parallax elements
    $("#thesis").addClass("parallax-enabled").prepend('<div class="parallax-foreground"></div><div class="parallax-background"></div>');
    $("#purpose").addClass("parallax-enabled").prepend('<div class="parallax-foreground"></div><div class="parallax-background"></div>');


    var controller = new ScrollMagic();

    var sunsetTimeline = new TimelineMax().add([
      TweenMax.fromTo(
        "#thesis.parallax-enabled .parallax-background", 1,
        {y: "0", z: "0.01px"},
        {y: "600%", z: "0.01px", ease: Linear.easeNone}
      ),
      TweenMax.fromTo(
        "#thesis.parallax-enabled .parallax-foreground", 1,
        {y: "50%", z: "0.01px"},
        {y: "300%", z: "0.01px", ease: Linear.easeNone}
      )
    ]);
    new ScrollScene({triggerElement: "#thesis", triggerHook: "onLeave", duration: $("#thesis").height()*1.5}).setTween(sunsetTimeline).addTo(controller);


    var railsTimeline = new TimelineMax().add([
      TweenMax.fromTo(
        "#purpose.parallax-enabled .parallax-background", 1,
        {y: "-400%", z: "0.01px"},
        {y: "300%", z: "0.01px", ease: Linear.easeNone}
      ),
      TweenMax.fromTo(
        "#purpose.parallax-enabled .parallax-foreground", 1,
        {y: "-200%", z: "0.01px"},
        {y: "200%", z: "0.01px", ease: Linear.easeNone}
      )
      ,
      TweenMax.fromTo(
        "#purpose.parallax-enabled header", 1,
        {y: "-120%", z: "0.01px"},
        {y: "000%", z: "0.01px", ease: Linear.easeNone}
      )
    ]);
    new ScrollScene({triggerElement: "#purpose", triggerHook: "onEnter", duration: $(window).height()*1.75}).setTween(railsTimeline).addTo(controller);


  }

});