const menuWrap = document.querySelector(".menu-lines");
const menuBox = document.querySelector(".ul-wrap");
const menuCross = document.querySelector(".lines-wrap");
const navBtns = document.querySelectorAll(".nav-btn");
let active = true;
// const socialMediaBtns = document.querySelectorAll(".nav-btn");



// Get all nav elements with the data-name attribute
const nav_btns = document.querySelectorAll('a[data-name]');
const menuBGname = document.querySelector(".bg-ul-wrap")
// Loop through each anchor element
nav_btns.forEach(function (nav) {
    nav.addEventListener("mouseover", () => {
        // Get the value of the data-name attribute
        let dataNameValue = nav.getAttribute('data-name');
        menuBGname.textContent = dataNameValue;
        menuBGname.classList.add("bg-ul-wrap-active")
    })
    nav.addEventListener("mouseout", () => {
        menuBGname.classList.remove("bg-ul-wrap-active")
    })
});

//showing menu and changing burger menu to arrow up 
menuWrap.addEventListener("click", () => {
    if (active) {
        menuBox.classList.add("ul-wrap-active");
        menuCross.classList.add("lines-wrap-active");
        active = !active;
    } else if (!active) {
        menuBox.classList.remove("ul-wrap-active");
        menuCross.classList.remove("lines-wrap-active");
        active = !active;
    }
})

// when it's active remove all active classes
if (active) {
    navBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            menuBox.classList.remove("ul-wrap-active");
            menuCross.classList.remove("lines-wrap-active");
            active = !active;
        })
    })
}




window.onscroll = function () { myFunction() };

// Get all the elements with class "section-card-container"
var sections = document.querySelectorAll(".section-card-container");

// Get the offset position of each section
var stickies = [];
sections.forEach(function (section) {
    stickies.push(section.offsetTop);
});

// Add the sticky class to the section when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    var scrollPosition = window.pageYOffset;

    sections.forEach(function (section, index) {
        if (scrollPosition >= stickies[index]) {
            section.classList.add("sticky");
        } else {
            section.classList.remove("sticky");
        }
    });
}

// Przejdź przez wszystkie sekcje i nadaj im zwiększający się z-index
sections.forEach(function (section, index) {
    // Ustaw z-index dla każdej sekcji
    section.style.setProperty('z-index', index + 1);
});


const blockCard = document.querySelector(".floating-ball-card")
const floatingCircle = document.querySelector(".floating-circle")
if (window.innerWidth >= 1200) {

    blockCard.addEventListener('mousemove', function (event) {
        var mouseX = event.clientX; // współrzędna X kursora względem lewego górnego rogu okna przeglądarki
        var mouseY = event.clientY; // współrzędna Y kursora względem lewego górnego rogu okna przeglądarki


        floatingCircle.style.setProperty("top", `${mouseY}px`)
        floatingCircle.style.setProperty("left", `${mouseX}px`)

    });

}




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        // if (content.style.display === "block") {
        //     content.style.display = "none";
        // } else {
        //     content.style.display = "block";
        // }
        if (content.classList.contains("active-content")) {
            content.classList.remove("active-content");
        } else {
            content.classList.add("active-content");
        }
    });
}


const copyTxt = document.getElementById("at-2").cloneNode(true);
document.getElementById("banner-2").appendChild(copyTxt);


const allContactLinks = document.querySelectorAll(".contact-link");
const mailToContactURL = "mailto:szelag.maciej@gmail.com";
for (let i = 0; i < allContactLinks.length; i++) {
    allContactLinks[i].setAttribute('href', mailToContactURL);
}

const elements = document.querySelectorAll('.hidden');



const intro = function () {
    const elms = document.querySelectorAll('.hidden');

    function showElementWithDelay(index, elements, animationParams, delay) {
        if (index < elements.length) {
            setTimeout(() => {
                for (const [property, value] of Object.entries(animationParams)) {
                    elements[index].style.setProperty(property, value);
                }
                showElementWithDelay(index + 1, elms, animationParams, delay);
            }, delay);
        }
    }

    // Wywołanie funkcji, aby rozpocząć proces pojawiania się elementów z opóźnieniem
    setTimeout(() => {
        const animationParams = { transform: "translateY(0)", opacity: 1 };
        showElementWithDelay(0, elms, animationParams, 40);
    }, 500);

    setTimeout(() => {
        const animationParams = { transform: "translateY(-100%)", opacity: 1 };
        showElementWithDelay(0, elms, animationParams, 40);
    }, 4000);
};

intro();



