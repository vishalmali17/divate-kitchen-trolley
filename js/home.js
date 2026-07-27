// Products Slider

$('.upvc-aluminum-slider').owlCarousel({
    stagePadding: 0,
    loop:true,
    margin:30,
    nav: true,
    autoplay: true,
    dots:false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.transforming-spaces-slider').owlCarousel({
    stagePadding: 0,
    loop:true,
    margin: 0,
    nav: true,
    autoplay: false,
    dots:false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

$('.testimonials-slider').owlCarousel({
    stagePadding: 0,
    loop:true,
    margin:30,
    nav: false,
    dots:true,
    autoplay: true,
    autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1.5
        },
        1000:{
            items:2.5
        }
    }
})

$('.design-diaries').owlCarousel({
    stagePadding: 0,
    loop:true,
    margin:30,
    nav: true,
    dots:false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})




const stats = document.querySelectorAll(".counter");

stats.forEach(stat => {
    // pattern used to separate input number from HTML into an array of numbers and non-numbers
    const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
    const time = 1000;
    let result = [...patt.exec(stat.textContent)];
    let fresh = true;
    let ticks;

    // Remove the first full match from result array (we don't need the full match, just the individual match groups)
    result.shift();
    // Remove undefined values from result array where they didn't have a match in one of the optional regex groups
    result = result.filter(res => res != null);

    while (stat.firstChild) {
        stat.removeChild(stat.firstChild);
    }

    for (let res of result) {
        if (isNaN(res)) {
            stat.insertAdjacentHTML("beforeend", `<span class="plus-color">${res}</span>`);
        } else {
            for (let i = 0; i < res.length; i++) {
                const digit = parseInt(res[i]);
                stat.insertAdjacentHTML(
                    "beforeend",
                    `<span data-value="${digit}">
                        <span>0</span>
                        ${Array(digit + 1)
                            .join(0)
                            .split(0)
                            .map(
                                (x, j) => `
                            <span>${j}</span>
                        `
                            )
                            .join("")}
                    </span>`
                );
            }
        }
    }

    ticks = [...stat.querySelectorAll("span[data-value]")];

    let activate = () => {
        let top = stat.getBoundingClientRect().top;
        let offset = window.innerHeight * 0.8;

        setTimeout(() => {
            fresh = false;
        }, time);

        if (top < offset) {
            setTimeout(() => {
                for (let tick of ticks) {
                    let dist = parseInt(tick.getAttribute("data-value")) + 1;
                    tick.style.transform = `translateY(-${dist * 100}%)`;
                }
            }, fresh ? time : 0);
            window.removeEventListener("scroll", activate);
        }
    };
    window.addEventListener("scroll", activate);
    activate();
});





// 

$(".link").each(function () {
    $(this)
        .on("mouseover", function () {
            $(".container-box").addClass("hover");
            $(".container-item").removeClass("active");
            $(this).parent().addClass("active");
        })
        .on("mouseleave", function () {
            $(".container-box").removeClass("hover");
        });
});





// // Array of colors to cycle through
// const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#A633FF", "#33FFF3"];
// let colorIndex = 0; // To track the current color

// // Variable to throttle color change
// let lastScrollY = 0;

// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;
//   const zigzag = Math.sin(scrollPosition / 200) * 400; // Zigzag motion

//   const box = document.querySelector(".background-box");
//   box.style.left = `calc(0% + ${zigzag}px)`; // Adjust horizontal position

//   // Change color every 2-3 scroll increments (example threshold: 100px)
//   if (Math.abs(scrollPosition - lastScrollY) > 700) {
//     lastScrollY = scrollPosition;
//     colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
//     box.style.backgroundColor = colors[colorIndex]; // Apply new color
//   }
// });


// 




// 

document.addEventListener('DOMContentLoaded', function () {
            const carousel = document.querySelector('#carouselExampleCaptionsSolutions');
            const secondIndicators = document.querySelectorAll('.second-indicators button');
            let currentSlideIndex = 0;

            // Step 1 is always marked as completed
            secondIndicators[0].classList.add('step-completed', 'step-1', 'active');

            carousel.addEventListener('slide.bs.carousel', function (event) {
                const newSlideIndex = event.to;

                // Mark all steps up to the current step as completed when moving forward
                if (newSlideIndex > currentSlideIndex) {
                    for (let i = 0; i <= newSlideIndex; i++) {
                        secondIndicators[i].classList.add(`step-${i + 1}`, 'step-completed', 'active');
                    }
                } 
                // Remove classes from all steps after the new step when moving backward
                else if (newSlideIndex < currentSlideIndex) {
                    for (let i = newSlideIndex + 1; i < secondIndicators.length; i++) {
                        secondIndicators[i].classList.remove(`step-${i + 1}`, 'step-completed', 'active');
                    }
                }

                // Update the current slide index
                currentSlideIndex = newSlideIndex;
            });
        });



