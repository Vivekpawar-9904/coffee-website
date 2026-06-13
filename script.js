// const imgs=document.querySelectorAll('.slider-wrapper ul img');
// const testimonials = document.querySelectorAll('.slider-wrapper ul li');

// const prev_btn=document.querySelector('.control_prev');
// const next_btn=document.querySelector('.control_next');

// let n=0;

// function changeSlide(){
//     for(let i=0;i<testimonials.length;i++){
//         testimonials[i].style.display='none';
//     }testimonials[n].style.display='block';
// }
// changeSlide();

// prev_btn.addEventListener('click',(e)=>{
//     if(n>0){
//         n--;
//     }else{
//         n=testimonials.length-1;
//     }changeSlide();
// })

// next_btn.addEventListener('click',(e)=>{
//     if(n<testimonials.length-1){
//         n++;
//     }else{
//         n=0;
//     }changeSlide();
// })

const testimonials = document.querySelectorAll('.slider-wrapper ul li');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide() {
    testimonials.forEach(testi => {
        testi.style.display = 'none';
    });
    testimonials[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click', () => {
    n = (n > 0) ? n - 1 : testimonials.length - 1;
    changeSlide();
});

next_btn.addEventListener('click', () => {
    n = (n < testimonials.length - 1) ? n + 1 : 0;
    changeSlide();
});



