 //  Stykey Header  
 $(window).scroll(function() {
     var scrolling = $(this).scrollTop();

     if (scrolling > 200) {
         $('.navbar').addClass('sticky_menu');
     } else {
         $('.navbar').removeClass('sticky_menu');
     }
 });

 //  Mix it up

 var containerEl = document.querySelector('.project_main');

 var mixer = mixitup(containerEl);

 //  Typed Js

 $(function() {
     $(".typed").typed({
         strings: ["Psd Template", "Psd Website.", "Psd Design."],
         // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
         stringsElement: null,
         // typing speed
         typeSpeed: 30,
         // time before typing starts
         startDelay: 1200,
         // backspacing speed
         backSpeed: 20,
         // time before backspacing
         backDelay: 500,
         // loop
         loop: true,
         // false = infinite
         loopCount: 5,
         // show cursor
         showCursor: false,
         // character for cursor
         cursorChar: "|",
         // attribute to type (null == text)
         attr: null,
         // either html or text
         contentType: 'html',
         // call when done callback function
         callback: function() {},
         // starting callback function before each string
         preStringTyped: function() {},
         //callback for every typed string
         onStringTyped: function() {},
         // callback for reset
         resetCallback: function() {}
     });
 });


 //  Counter UP
 $(document).ready(function() {
     $('.counter').counterUp({
         delay: 10,
         time: 2000
     });
 });

 //  Venobox

 $(document).ready(function() {
     $('.venobox').venobox();
 });