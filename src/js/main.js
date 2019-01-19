console.log("Shaky Knees");

//Speaker Loader Animations
var loaderSpeaker = new TimelineMax({delay: 1.5});

loaderSpeaker.from(".speaker-loader", .3, {y: "-1000px"}) 
loaderSpeaker.to(".speaker-loader", .5, { y: "0"});
// ease: CustomEase.create("custom", "M0,0 C0.323,0 0.38,0.023 0.433,0.05 0.554,0.11 0.764,0.23 0.805,0.44 0.849,0.668 0.839,0.734 0.932,0.734 0.999,0.734 0.974,0.656 1,0.632")
// loaderSpeaker.to(".speaker-loader", 1, {opacity: 1});


//Logo Loader Animations
var loaderLogo = new TimelineMax({delay: 0.4});

loaderLogo.from(".logo-loader",1, {opacity: 0})
loaderLogo.to(".logo-loader",1, {opacity: 0.5})
loaderLogo.to(".logo-loader",1, {opacity: 1})
loaderLogo.to(".loader", 1, {display: "none"});