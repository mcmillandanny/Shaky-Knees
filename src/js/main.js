console.log("Shaky Knees");

//Speaker Loader Animations
var loaderSpeaker = new TimelineMax({delay: 1.5});

loaderSpeaker.from(".speaker-loader", .4, {y: "-1000px"}) 
loaderSpeaker.to(".speaker-loader", 2, {y: "0px"});
// loaderSpeaker.to(".speaker-loader", 1, {opacity: 1});


//Logo Loader Animations
var loaderLogo = new TimelineMax({delay: 0.4});

loaderLogo.from(".logo-loader",1, {opacity: 0})
loaderLogo.to(".logo-loader",2, {opacity: 0.5})
loaderLogo.to(".logo-loader",2, {opacity: 1});