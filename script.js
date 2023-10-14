Let sections = document.querySelectorAll('div');
Let navLinks = document.querySelectorAll('div nav a');

// window.scrollBy({
//     top: 100,
//     left: 100,
//     behavior: "smooth",
// });

// function scroll() {
//     const targetElement = document.querySelector('#id'); // Replace with your target ID
//     const targetPosition = targetElement.getBoundingClientRect().top;
//     const startPosition = window.scrollY;
//     const distance = targetPosition - startPosition;
//     const duration = 1000; // Adjust the duration as needed

//     let startTime = null;

//     function ease(t, b, c, d) {
//       t /= d / 2;
//       if (t < 1) return (c / 2) * t * t + b;
//       t--;
//       return (-c / 2) * (t * (t - 2) - 1) + b;
//     }

//     function animation(currentTime) {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const run = ease(timeElapsed, startPosition, distance, duration);
//       window.scrollTo(0, run);
//       if (timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     requestAnimationFrame(animation);
// };








window.onscroll = () =>{
    sections.foreach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offset.Top;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id');
        

        if(top >= offset && top < offset + height ){
            navLinks.foreach(links => {
                links.classList.remove('span-col');
                document.querySelectorAll('div nav a[href*=' + id +']').classList.add('span-col');
            })
        }
    })
}
