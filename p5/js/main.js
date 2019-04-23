$(document).ready(function() {
  $('.button')
  .mouseup(function() {
        $('.button').toggleClass('gray');
    })
    .mousedown(function() {
        $('.button').toggleClass('gray');
      });


$('.button').click(function() {
     var theImages = [{
        src: "imgs/starbucks.png",

      }, {
        src: "imgs/mcdonalds.png",

      }, {
        src: "imgs/bigby.png",

      },{
        src: "imgs/humanbean.png",

      }, {
        src: "imgs/kwik.png",

      }, {
        src: "imgs/small.png",

      }, {
        src:"imgs/speedway.png",

      }, {
        src:"imgs/stumptown.png",

      }, {
        src:"imgs/timhorton.png"

      }, {
        src:"imgs/mcdonalds2.png",

      }, {
        src:"imgs/mcdonalds3.png",

      }, {
        src:"imgs/starbucks2.png",

      }, {
        src:"imgs/starbucks3.png",

      }, {
        src:"imgs/starbucks4.png",

      }, {
        src:"imgs/timhorton3.png",

      }, {
        src:"imgs/wawa.png"
    }];

    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        // preBuffer[i].width = theImages[i].width;
        // preBuffer[i].height = theImages[i].height;
    }

    // create random image number
    function getRandomInt(min,max)
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
      imn = Math.floor(Math.random() * (max - min + 1)) + min;
      return preBuffer[imn];
    }

    // 0 is first image,   preBuffer.length - 1) is  last image
    var newImage = getRandomInt(0, preBuffer.length - 1);

    // remove the previous images
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    // display the image
    $('.show').append(newImage);
    });

});
