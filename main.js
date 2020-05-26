const hamburger = document.querySelector(".hamburger"),
menu = document.querySelector(".left-menu"),
tvShows = document.querySelector(".tv-shows");

//работа с меню
hamburger.addEventListener("click", () =>{
    menu.classList.toggle("openMenu");
})

document.addEventListener("click", (event) =>{
    const target = event.target;
    if (target.closest (".left-menu")) {
        if (target.closest(".dropdown")) target.closest(".dropdown").classList.toggle("active");
        return;
    }; 
    menu.classList.remove("openMenu")
    
} );

//при наведении на картинки
let newSrc;
tvShows.addEventListener("mouseover", (event) =>{
    const target = event.target;
    if (target.matches("img")) {
        newSrc = target.src;        
        target.src = target.dataset.backdrop;
    }
    return;
});

tvShows.addEventListener("mouseout", (event) =>{
    const target = event.target;
    if (target.matches("img")) {
        target.src = newSrc;
    }
    return;
})
