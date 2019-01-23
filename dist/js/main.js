"use strict";

console.log("Shaky Knees");
//Speaker Loader Animations
var loaderSpeaker = new TimelineMax({ delay: 1.5 });

loaderSpeaker.from(".speaker-loader", 2, {
    y: "-1200px",
    opacity: 1,
    ease: CustomEase.create("custom", "M0,0,C0.14,0,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1")
});

//Logo Loader Animations
var loaderLogo = new TimelineMax({ delay: 0.4 });

loaderLogo.from(".logo-loader", 1, {
    opacity: 0,
    ease: Back.easeIn
});
loaderLogo.to(".logo-loader", 1, {
    opacity: 1
});
// loaderLogo.to(".loader", 4, {
//     display: "none"
// });
//# sourceMappingURL=main.js.map
