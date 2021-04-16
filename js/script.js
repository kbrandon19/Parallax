let controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();

//timeline.to( parameter/ element, duration, the action)

//timeline.fromTo(".text",{opacity:0}, {opacity:1, duration: 3});

//the '-=' causes the parameter to move with the first element
timeline.to('.rock', 3, {y:-200})
        .to('.girl', 3, {y:-200}, '-=3')
        .to('.bg1', 3, {y:-50}, '-=3')
        .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 },'-=3')
        .to('.content',3,{top:'0%'},'-=3');


//creates a trigger to initiate the animation action
let scene = new ScrollMagic.Scene({
  triggerElement:"section",
  duration:"100%",
  //triggerhook defines where you want to trigger the animation
  // 0 the beginning (top)
  // 1 the end (bottom)
  triggerHook:0,


})

.setTween(timeline)
.setPin("section")
.addTo(controller)

/*
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".rock", 10, { y: -300 })
  .to(".girl", 10, { y: -200 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
  */
