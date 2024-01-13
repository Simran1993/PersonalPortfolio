// Add a class to trigger the fade-in animation when the page loads
window.addEventListener('load', function () {
  const container = document.querySelector('.container');
  container.classList.add('fade-in');
});


/**
 * For next and Previous Button
 */
let slides = document.querySelectorAll('.ProjectsCon');
let index=0;

function next(){
  slides[index].classList.remove('active');
  index =(index + 1)% slides.length;
  slides[index].classList.add('active');

}

function prev(){
  slides[index].classList.remove('active');
  index =(index - 1  + slides.length)% slides.length;
  slides[index].classList.add('active');
  
}
//setInterval(next, 3000);
