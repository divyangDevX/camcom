if (document.getElementById("checkwheel")) {
  window.addEventListener("load", function () {
    loadjs(["sticky-wheel.min.js"], function () {
      stickyWheel(
        document.getElementById("hs_cos_wrapper_widget_1684856214064")
      );
    });
  });
}

$(".humburgar").on("click", function () {
  $(this).toggleClass("open");
  {
    $(".side_menu").toggleClass("openmenu");
  }
  {
    $("nav").toggleClass("bg-menu");
  }
  {
    $("body").toggleClass("hidden-scroll");
  }
});

// Show the first tab by default
// $('.tabs-stage div').hide();
$(".tabs-stage  [id*=tab-]:first").show();
$(".tabs-nav li:first").addClass("tab-active");

// Change tab class and display content
$(".tabs-nav a").on("click", function (event) {
  event.preventDefault();
  $(".tabs-nav li").removeClass("tab-active");
  $(this).parent().addClass("tab-active");

  $(".tabs-stage [id*=tab-]").hide();
  $($(this).attr("href")).show();
});

$(".tab-link").click(function () {
  var tabID = $(this).attr("data-tab");

  $(this).addClass("active-banner").siblings().removeClass("active-banner");

  $("#tab-" + tabID)
    .addClass("active-banner")
    .siblings()
    .removeClass("active-banner");
});

$(".skipbtnhome").click(function () {
  $("html , body").animate(
    {
      scrollTop: $(".cards-boxes").offset().top - 50,
    },
    500
  );
});
$(".skipbtn.two-scroll").click(function () {
  $("html , body").animate(
    {
      scrollTop: $(".mousescrollone").offset().top - 50,
    },
    500
  );
});
$(".three-scroll").click(function () {
  $("html , body").animate(
    {
      scrollTop: $(".mousescrolltwo").offset().top - 50,
    },
    500
  );
});
$(".skipbtn.four-scroll").click(function () {
  $("html , body").animate(
    {
      scrollTop: $(".mousescrollthree").offset().top - 50,
    },
    500
  );
});
$(".skipbtn.five-scroll").click(function () {
  $("html , body").animate(
    {
      scrollTop: $(".mousescrollfour").offset().top - 50,
    },
    500
  );
});
$(".skipbtn.six-scroll").click(function () {
  $("html , body").animate(
    {
      scrollTop: $(".mousescrollfive").offset().top - 50,
    },
    500
  );
});
$(".skipbtn.seven-scroll").click(function () {
  $("html , body").animate(
    {
      scrollTop: $(".pharma-sec").offset().top - 50,
    },
    500
  );
});

$(".scroll-about").click(function () {
  $("html , body").animate(
    {
      scrollTop: $(".about-testimonial").offset().top - 50,
    },
    500
  );
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var homebanner = new Swiper(".mySwiperprogress", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-banner-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-banner-prev",
    prevEl: ".swiper-banner-next",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = ``;
    },
  },
  speed: 1000,
});
function handleVideoPlayback() {
  // Pause all videos
  document.querySelectorAll(".swiper-slide video").forEach(function (video) {
    video.currentTime = 0;
  });

  // Find the active slide
  // var activeSlide = document.querySelector(".swiper-slide-active");
  // if (activeSlide) {
  //     var video = activeSlide.querySelector("video");
  //     if (video) {
  //         video.currentTime = 0;
  //         video.play().catch(function (error) {
  //             console.log("Failed to play video:", error);
  //         });
  //     }
  // }
}
homebanner.on("slideChangeTransitionEnd", handleVideoPlayback);
// Ensure the video autoplays correctly on initial load
window.addEventListener("load", handleVideoPlayback);

var swiper = new Swiper(".mySwipercards", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(
  ".mySwipertestimonialvideoslider, .mySwipertestimonial, .mySwipertestimonialimage",
  {
    // pagination: {
    //   el: ".swiper-testimonial-contentpagination",
    //   clickable: true,
    // },
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false
    // },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        navigation: {
          nextEl: ".swiper-testimonial-prev",
          prevEl: ".swiper-testimonial-next",
        },
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-testimonial-prev",
          prevEl: ".swiper-testimonial-next",
        },
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-testimonial-prev",
          prevEl: ".swiper-testimonial-next",
        },
      },
    },
  }
);

$(window).scroll(function () {
  if ($(this).scrollTop() > 55) {
    $("header").addClass("sticky-head");
  } else {
    $("header").removeClass("sticky-head");
  }

  if ($(this).scrollTop() > 100) {
    $("header").addClass("sticky-fixed");
  } else {
    $("header").removeClass("sticky-fixed");
  }
});

$(".has-child > a").click(function () {
  1199 > $(window).width() &&
    ($(".sub-menu").slideUp(),
    !1 == $(this).next(".sub-menu").is(":visible") &&
      $(this).next(".sub-menu").slideDown());
});

$("#button").click(function () {
  $("#onefile").trigger("click");
});

$("#onefile").change(function () {
  $("#val").text(this.value.replace(/C:\\fakepath\\/i, ""));
});

$("#button2").click(function () {
  $("#twofile").trigger("click");
});

$("#twofile").change(function () {
  $("#val2").text(this.value.replace(/C:\\fakepath\\/i, ""));
});

var swiper = new Swiper(".mySwipertestimonialcareer", {
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-testimonial-prev",
        prevEl: ".swiper-testimonial-next",
      },
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
      navigation: {
        nextEl: ".swiper-testimonial-prev",
        prevEl: ".swiper-testimonial-next",
      },
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-testimonial-prev",
        prevEl: ".swiper-testimonial-next",
      },
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-testimonial-prev",
        prevEl: ".swiper-testimonial-next",
      },
    },
  },
});

var swiper = new Swiper(".mySwipercaseastudies", {
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-testimonial-prev",
        prevEl: ".swiper-testimonial-next",
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
      navigation: {
        nextEl: ".swiper-testimonial-prev",
        prevEl: ".swiper-testimonial-next",
      },
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-testimonial-prev",
        prevEl: ".swiper-testimonial-next",
      },
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-testimonial-prev",
        prevEl: ".swiper-testimonial-next",
      },
    },
  },
});

// const interleaveOffset = 0.75;
var menu = [
  "Public Safety",
  "Automotive Manufacturing",
  "Finished vehicle logistics",
  "Automotive Aftermarket",
  "Motor Insurance",
  "Warehousing",
  "Pharma",
];

if ($(window).width() > 1100) {
  //   var swiperSection = document.querySelector("#swiper-section");
  //   console.log("swiperSection", swiperSection);

  //   const scrollOptions = {
  //     direction: "vertical",
  //     speed: 1000,
  //     effect: "slide",
  //     initialSlide: 1,
  //     mousewheelControl: true,
  //     effect: "slide",
  //     watchSlidesProgress: true,
  //     mousewheel: {
  //       releaseOnEdges: true,
  //       enabled: false,
  //     },
  //     pagination: {
  //       el: ".swiper-paginationmousescroll",
  //       clickable: true,
  //       type: "bullets",
  //       renderBullet: function (index, className) {
  //         return '<span class="' + className + '">' + menu[index] + "</span>";
  //       },
  //     },
  //   };

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           scrollOptions.mousewheel = {
  //             enabled: true,
  //             releaseOnEdges: true,
  //           };
  //           //   console.log("The section is fully visible in the viewport");
  //           //   new Swiper(".homemousescroll", scrollOptions);
  //         } else {
  //           scrollOptions.mousewheel = {
  //             enabled: false,
  //             releaseOnEdges: false,
  //           };
  //           console.log("The section is not fully visible in the viewport");
  //         }
  //       });
  //     },
  //     {
  //       root: null, // Use the document's viewport as the root
  //       threshold: 0.9, // Trigger callback when 100% of the target is visible
  //     }
  //   );

  //   console.log("scrollOptions", scrollOptions);
  //   var swiper = new Swiper(".homemousescroll", scrollOptions);

  //   observer.observe(swiperSection);
  var swiperSection = document.querySelector("#swiper-section");
  console.log("swiperSection", swiperSection);

  const scrollOptions = {
    direction: "vertical",
    speed: 1000,
    effect: "slide",
    initialSlide: 1,
    mousewheelControl: true,
    effect: "slide",
    cssMode: true,
    watchSlidesProgress: true,
    mousewheel: {
      releaseOnEdges: true,
      enabled: false,
    },
    pagination: {
      el: ".swiper-paginationmousescroll",
      clickable: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + "</span>";
      },
    },
  };

  let swiper = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scrollOptions.mousewheel = {
            enabled: true,
            releaseOnEdges: true,
          };
          if (!swiper) {
            swiper = new Swiper(".homemousescroll", scrollOptions);
          } else {
            swiper.params.mousewheel.enabled = true;
            swiper.update();
          }
          console.log("The section is fully visible in the viewport");
        } else {
          if (swiper) {
            swiper.params.mousewheel.enabled = false;
            swiper.update();
          }
          console.log("The section is not fully visible in the viewport");
        }
      });
    },
    {
      root: null, // Use the document's viewport as the root
      threshold: 0.9, // Trigger callback when 90% of the target is visible
    }
  );

  console.log("scrollOptions", scrollOptions);
  observer.observe(swiperSection);
} else {
  var homescroll = new Swiper(".homemousescroll", {
    direction: "horizontal",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-paginationmousescroll",
      clickable: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + "</span>";
      },
    },
  });
}

var menuone = [
  "Automotive Manufacturing",
  "Finished Vehicle Logistics",
  "Automotive Aftermarket",
];
if ($(window).width() > 1100) {
  var swiper = new Swiper(".mousescrollone", {
    direction: "vertical",
    speed: 800,
    mousewheelControl: true,
    watchSlidesProgress: true,
    mousewheel: {
      releaseOnEdges: true,
    },

    pagination: {
      el: ".swiper-pagination-mousescrollone",
      clickable: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menuone[index] + "</span>";
      },
    },

    on: {
      init: function () {
        console.log("Swiper initialized");
      },
      slideChange: function () {
        var activeIndex = this.activeIndex;
        var slidesCount = this.slides.length - 1;

        console.log("Changed to slide index:", activeIndex);

        if (activeIndex === 0) {
          $(".top-position-one").removeClass("addfixed");
        }
        // if (activeIndex === 1) {
        //     $(".top-position-one").addClass("addfixed");
        // }
        else if (activeIndex === slidesCount) {
          $(".top-position-one").removeClass("addfixed");
        }
      },
    },
  });

  gsap.to(".sliderpinone", {
    scrollTrigger: {
      pin: ".sliderpinone",
      start: "top 0%",
      end: "bottom 0%",
    },
  });
} else {
  var swiper = new Swiper(".mousescrollone", {
    direction: "horizontal",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-mousescrollone",
      clickable: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + "</span>";
      },
    },
  });
}

var menutwo = ["RVDI", "RORO"];
var swiper = new Swiper(".mousescrolltwo", {
  direction: "vertical",
  speed: 800,
  mousewheelControl: true,
  watchSlidesProgress: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: {
    el: ".swiper-pagination-mousescrolltwo",
    clickable: true,
    type: "bullets",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menutwo[index] + "</span>";
    },
  },
});

var menuthree = [
  "Dealerships and Service centers",
  "Used cars",
  "Fleets/Car Rental",
];
var swiper = new Swiper(".mousescrollthree", {
  direction: "vertical",
  speed: 800,
  mousewheelControl: true,
  watchSlidesProgress: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: {
    el: ".swiper-pagination-mousescrollthree",
    clickable: true,
    type: "bullets",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menuthree[index] + "</span>";
    },
  },
});

var menufour = ["Motor Insurance Solutions", "Damage Assessment"];
var swiper = new Swiper(".mousescrollfour", {
  direction: "vertical",
  speed: 800,
  mousewheelControl: true,
  watchSlidesProgress: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: {
    el: ".swiper-pagination-mousescrollfour",
    clickable: true,
    type: "bullets",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menufour[index] + "</span>";
    },
  },
});

var menufive = ["INWARDS", "OUTWARDS", "RTO"];
if ($(window).width() > 1100) {
  var swiperfive = new Swiper(".mousescrollfive", {
    direction: "vertical",
    speed: 800,
    mousewheelControl: true,
    watchSlidesProgress: true,
    mousewheel: {
      releaseOnEdges: true,
    },

    pagination: {
      el: ".swiper-pagination-mousescrollfive",
      clickable: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menufive[index] + "</span>";
      },
    },

    on: {
      init: function () {
        console.log("Swiper initialized");
      },
      slideChange: function () {
        var activeIndex = this.activeIndex;
        var slidesCount = this.slides.length - 1;

        console.log("Changed to slide index:", activeIndex);

        if (activeIndex === 0) {
          $(".top-position-five").removeClass("addfixed");
        }
        // if (activeIndex === 1) {
        //     $(".top-position-five").addClass("addfixed");
        // }
        else if (activeIndex === slidesCount) {
          $(".top-position-five").removeClass("addfixed");
        }
      },
    },
  });

  gsap.to(".sliderpinfive", {
    scrollTrigger: {
      pin: ".sliderpinfive",
      start: "top 0%",
      end: "bottom 0%",
    },
  });
} else {
  var swiperfive = new Swiper(".mousescrollfive", {
    direction: "horizontal",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-mousescrollfive",
      clickable: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + "</span>";
      },
    },
  });
}

function checkForVisibility() {
  var headers = document.querySelectorAll(".textheader");
  headers.forEach(function (textheader) {
    if (isElementInViewport(textheader)) {
      textheader.classList.add("headerVisible");
    } else {
      textheader.classList.remove("headerVisible");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}

$(".filter-option-heading").click(function () {
  $(this)
    .toggleClass("activeFilter")
    .next(".filter-option-content")
    .stop()
    .slideToggle(500);
});

var swiper = new Swiper(".whatnew", {
  pagination: {
    el: ".swiper-whatnewpagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".mySwiperpollution", {
  pagination: {
    el: ".swiper-pollutionpagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

var Url = location.href,
  spliturl = Url.split("?")[1];
"clcikform" == spliturl &&
  setTimeout(function () {
    jQuery("html , body").animate(
      { scrollTop: jQuery(".bottomform").offset().top - 50 },
      500
    ),
      console.log("setTimeout");
  }, 200);

function run_gsap() {
  let gsap_loaded = setInterval(function () {
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      bg_section();
      clearInterval(gsap_loaded);
    }
  }, 500);

  function bg_section() {
    gsap.from(".bg-section", {
      scrollTrigger: {
        trigger: ".bg-section",
        start: "-150px center",
        end: "300px center",
        scrub: true,
      },
      width: "30%",
      duration: 1,
    });
  }
}
run_gsap();

var swiper = new Swiper(".horizontal-mobile", {
  navigation: {
    nextEl: ".swiper-horizontalmobile-prev",
    prevEl: ".swiper-horizontalmobile-next",
  },

  breakpoints: {
    360: {
      slidesPerView: "auto",
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1399: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

$("#myForm").length &&
  ($.validator.addMethod(
    "name_regex",
    function (e, t) {
      return this.optional(t) || /^[a-zA-Z0_ ]*$/i.test(e);
    },
    "Firstname with only a-z A-Z."
  ),
  $.validator.addMethod(
    "mobile_regex",
    function (e, t) {
      return this.optional(t) || /^[0-9\.\-_]{10,30}$/i.test(e);
    },
    "Mobile Number with only 0-9."
  ),
  $("#myForm").validate({
    rules: {
      full_name: { required: !0, minlength: 1, name_regex: !0 },
      phone: {
        required: !0,
        mobile_regex: !0,
        minlength: 10,
        maxlength: 10,
      },
      email: { required: !0, email: !0 },
      // message: { required: !0 },
    },
    messages: {
      first_name: { required: "The Name field is mandatory!" },
      mobile: { required: "The Mobile field is mandatory!" },
      email: { required: "The Email field is mandatory!" },
    },
  }));

// one scroll page

// const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//     console.log(e);
// });

// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//     lenis.raf(time * 500);
// });

// gsap.ticker.lagSmoothing(0);

// text reveal

// const childSplit = new SplitText(".animate-tag h2, .animate-tag h3, .animate-tag h1", {type: "lines"});

// childSplit.lines.forEach(line => {
//   gsap.from(line, {
//     opacity: 0,
//     yPercent: 200,
//     duration: 1.8,
//     ease: "power4",
//     scrollTrigger: {
//       trigger: line,
//       toggleActions: "play none none reverse"
//     }
//   });
// });

// gsap tab

// console.clear();

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const tabs = gsap.utils.toArray(".left-content li");
const amount = tabs.length;
const rightElements = document.querySelector(".right-content");
let active;

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-large",
    start: "top top",
    end: "+=700%",
    pin: true,
    scrub: true,
    // markers: true
  },
});

tl.to(rightElements, {
  y: () => window.innerHeight - rightElements.scrollHeight,
  ease: "none",
  duration: 1,
});

tabs.forEach((tab, i) => {
  const position = i / (amount - 1);
  const link = tab.querySelector("a");
  const st = tl.scrollTrigger;
  tl.add("tab-" + (i + 1), position).call(
    () => {
      if (active !== undefined) {
        tabs[active].classList.toggle("selected");
      }
      tab.classList.toggle("selected");
      active = i;
    },
    null,
    position
  );
  link.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, {
      scrollTo: {
        y: st.start + (st.end - st.start) * (position / tl.duration()),
      },
      duration: 0.4,
      ease: "power1.inOut",
    });
  });
});

tl.to({}, { duration: 0.1 });

// $("#myForm").length &&()

// $.fn.isInViewport = function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = elementTop + $(this).outerHeight();

//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     return elementBottom > viewportTop && elementTop < viewportBottom;
//  };

//  let animateDone = false;
//  $(window).on('resize scroll load', function() {
//   if($('.count').isInViewport()){
//     $('.count').each(function () {
//       if(!animateDone){
//         $(this).prop('Counter',0).animate({
//           Counter: $(this).text()
//         }, {
//           duration: 4000,
//           easing: 'swing',
//           step: function (now) {

//             $(this).text(Math.ceil(now));
//           }
//         });
//       }
//     });
//     animateDone = true;
//   }
//  });

// Acc
$(document).on("click", ".naccs .menu div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs .menu div").removeClass("active");
    $(".naccs ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .addClass("active");

    var listItemHeight = $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs ul").height(listItemHeight + "px");
  }
});

$(document).on("click", ".naccs .menusecondtab div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs .menusecondtab div").removeClass("active");
    $(".naccs ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .addClass("active");

    var listItemHeight = $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs ul").height(listItemHeight + "px");
  }
});

$(document).ready(function () {
  var VidePlaying = false;
  $(".hero_video").on("click", function (e) {
    e.preventDefault(); // Prevent the default behavior of the click event
    e.stopPropagation(); // Stop the event from propagating further

    var video = $(this)[0];

    if (!VidePlaying) {
      video
        .play()
        .then(function () {
          VidePlaying = true;
        })
        .catch(function (error) {
          console.error("Play request failed:", error);
        });
      $(this).parent().find(".slideplaybutton").hide();
    } else {
      video.pause();
      VidePlaying = false;
      $(this).parent().find(".slideplaybutton").show();
    }
  });
  $(".audiobtn.mutevideo").click(function () {
    var playervid = $(this).siblings("video");
    if (playervid.prop("muted")) {
      playervid.prop("muted", false);
      $(this).hide();
      $(this).siblings(".unmutevideo").show();
    }
  });
  $(".audiobtn.unmutevideo").click(function () {
    var playervid = $(this).siblings("video");
    playervid.prop("muted", true);
    $(this).hide();
    $(this).siblings(".mutevideo").show();
  });
});
$(document).ready(function () {
  var VidePlaying = false;
  $(".slideplaybutton").on("click", function (e) {
    e.preventDefault(); // Prevent the default behavior of the click event
    e.stopPropagation(); // Stop the event from propagating further

    var video = $(this).prev("video")[0];

    if (!VidePlaying) {
      video
        .play()
        .then(function () {
          VidePlaying = true;
        })
        .catch(function (error) {
          console.error("Play request failed:", error);
        });
      $(this).hide();
    } else {
      video.pause();
      VidePlaying = false;
      $(this).show();
    }
  });
});
