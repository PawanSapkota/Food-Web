console.log('food website');


// const navOpen = document.querySelector(".nav__open");

const btnMenu = document.querySelector(".btn__mobile__nav")
const header = document.querySelector(".header");


btnMenu.addEventListener('click',function(){
    header.classList.toggle("nav__open")    
}
)
const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks)

allLinks.forEach(function(link){
    link.addEventListener('click',function(){
        const href = link.getAttribute('href')
        console.log(href)
        // Scrol to top
        if(href==='#')window.scrollTo({
            top:0,
            behavior:"smooth"
        })         
       
    })

})

// navLinks.addEventListener("click",function(e){
//     e.preventDefault();

//     if(e.target.classList.contains('main__nav__link')){
//         const id = e.target.getAttribute("href")

//         document.querySelector(id).scrollIntoView({behavior:'smooth'})
//     }

// })
// navLinks.addEventListener('click',function(e){
//     e.preventDefault();
    
//     // Matching strategy
//     if(e.target.classList.contains('nav__link')){
//         const id = e.target.getAttribute('href');
//         console.log(id)

//         document.querySelector(id).scrollIntoView({behavior:'smooth'})
//     }
// })
