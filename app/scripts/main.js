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

  TweenMax.to(window, 2.5, {scrollTo:{y:$e.offset().top - $(".navbar-fixed-top").height()}, ease:Power2.easeInOut});
});


$(document).ready(function() {

  if ($(window).width() > 768) {

    // insert parallax elements
    $("#thesis").addClass("parallax-enabled").prepend('<div class="parallax-foreground"></div><div class="parallax-background"></div>');
    $("#purpose").addClass("parallax-enabled").prepend('<div class="parallax-foreground"></div><div class="parallax-background"></div>');
    $("#course").addClass("parallax-enabled").prepend('<div class="parallax-background"></div>');

    $("#prices").addClass("parallax-enabled").prepend('<div class="parallax-helicopter"></div><div class="parallax-ship"></div><div class="parallax-background"></div>');

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
        {y: "-350%", z: "0.01px"},
        {y: "350%", z: "0.01px", ease: Linear.easeNone}
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



    var mapTimeline = new TimelineMax().add([
      TweenMax.fromTo(
        "#course.parallax-enabled .parallax-background", 1,
        {y: "-350%", z: "0.01px"},
        {y: "350%", z: "0.01px", ease: Linear.easeNone}
      )
    ]);
    new ScrollScene({triggerElement: "#course", triggerHook: "onEnter", duration: $("#course").height()*1.75}).setTween(mapTimeline).addTo(controller);


    var trophyTimeline = new TimelineMax().add([
      TweenMax.fromTo(
        "#award .swag-grid .photoset-row img", 1,
        {y: "-350%", z: "0.01px"},
        {y: "350%", z: "0.01px", ease: Linear.easeNone}
      )
    ]);
    new ScrollScene({triggerElement: "#award", triggerHook: "onEnter", duration: $(window).height()*1.75}).setTween(trophyTimeline).addTo(controller);

    var landingTimeline = new TimelineMax().add([
      TweenMax.fromTo(
        "#prices.parallax-enabled .parallax-background", 1,
        {y: "-500%", z: "0.01px"},
        {y: "500%", z: "0.01px", ease: Linear.easeNone}
      ),
      TweenMax.fromTo(
        "#prices.parallax-enabled .parallax-helicopter", 1,
        {y: "-250%", z: "0.01px"},
        {y: "350%", z: "0.01px", ease: Linear.easeNone}
      ),
      TweenMax.fromTo(
        "#prices.parallax-enabled .parallax-ship", 1,
        {y: "-50%", z: "0.01px"},
        {y: "100%", z: "0.01px", ease: Linear.easeNone}
      )
    ]);
    new ScrollScene({triggerElement: "#prices", triggerHook: "onEnter", duration: $("#prices").height()+$(window).height()}).setTween(landingTimeline).addTo(controller);

  }


  // clock

  var labels = ['weeks', 'days', 'hours', 'minutes', 'seconds'],
       nextYear = '2015/10/11',
       currDate = '00:00:00:00:00',
       nextDate = '00:00:00:00:00',
       parser = /([0-9]{2})/gi,
       $example = $(".timer");

       var template = _.template(""+
       '<div class="time <%= label %>">'+
         '<span class="count curr top"><%= curr %></span>'+
         '<span class="count next top"><%= next %></span>'+
         '<span class="count next bottom"><%= next %></span>'+
         '<span class="count curr bottom"><%= curr %></span>'+
         '<span class="label"><%= label.length < 6 ? label : label.substr(0, 3)  %></span>'+
       '</div>');
     // Parse countdown string to an object
     function strfobj(str) {
       var parsed = str.match(parser),
         obj = {};
       labels.forEach(function(label, i) {
         obj[label] = parsed[i]
       });
       return obj;
     }
     // Return the time components that diffs
     function diff(obj1, obj2) {
       var diff = [];
       labels.forEach(function(key) {
         if (obj1[key] !== obj2[key]) {
           diff.push(key);
         }
       });
       return diff;
     }
     // Build the layout
     var initData = strfobj(currDate);
     labels.forEach(function(label, i) {
       $example.append(template({
         curr: initData[label],
         next: initData[label],
         label: label
       }));
     });
     // Starts the countdown
     $example.countdown(nextYear, function(event) {
       var newDate = event.strftime('%w:%d:%H:%M:%S'),
         data;
       if (newDate !== nextDate) {
         currDate = nextDate;
         nextDate = newDate;
         // Setup the data
         data = {
           'curr': strfobj(currDate),
           'next': strfobj(nextDate)
         };
         // Apply the new values to each node that changed
         diff(data.curr, data.next).forEach(function(label) {
           var selector = '.%s'.replace(/%s/, label),
               $node = $example.find(selector);
           // Update the node
           $node.removeClass('flip');
           $node.find('.curr').text(data.curr[label]);
           $node.find('.next').text(data.next[label]);
           // Wait for a repaint to then flip
           _.delay(function($node) {
             $node.addClass('flip');
           }, 250, $node);
         });
       }
     });

});