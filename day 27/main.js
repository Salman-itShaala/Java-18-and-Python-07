const horizontalScrollPrgrs = document.getElementById("scroll-progress");

// console.log(document.body.clientHeight);
const totalHeight = document.body.scrollHeight;
const winHeight = window.innerHeight;

document.addEventListener("scroll", handleScroll);


function handleScroll() {
    const width = (window.scrollY / (totalHeight - winHeight)) * 100
    horizontalScrollPrgrs.style.width = width + "%";
}








