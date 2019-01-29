"use strict";

console.log("Shaky Knees");

var splitTextedStuff = new SplitText(".band-names p", { type: 'words' });

// TweenMax.staggerFrom(splitTextedStuff.words, 1, {scale: 0, left: -320, top: -110 }, 0.5)


splitTextedStuff.words.forEach(function (word, i) {

    TweenMax.from(word, 1, {
        delay: 2 + i * 0.1,
        scale: 0,
        left: -word.offsetLeft + 110,
        top: -word.offsetTop + 120
    });
});
//Speaker Loader Animations
// var loaderSpeaker = new TimelineMax({delay: 1.5});

// loaderSpeaker.from(".speaker-loader", 2, {
//     y: "-1200px", 
//     opacity: 1,
//     ease: CustomEase.create("custom", "M0,0,C0.14,0,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1")
// });

// //Logo Loader Animations
var loaderLogo = new TimelineMax({ delay: 0.4 });

loaderLogo.from(".logo-loader", 1, {
    opacity: 0,
    ease: Back.easeIn
});
loaderLogo.to(".logo-loader", 1, {
    opacity: 1
});
// loaderLogo.to(".loader", 1, {
//     display: "none"
// });


/// Skull Load in animation
var skull = new TimelineMax({ dely: 0.6 });

skull.to(".skull1", 2, {
    x: "1150px"
});

skull.to(".skull2", 2, {
    x: "1150px"

});

skull.to(".skull2", 3, {
    rotaion: 20
});
//# sourceMappingURL=main.js.map
