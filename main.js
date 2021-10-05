//set a variable for the current id
//set variable for img tags under the image class
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

//when you use querySelectorAll you get a DOM list back
//this lets us access it like an array
imgs[0].style.opacity = opacity;

//if you wanted to do array destructuring you could set the variables like this
// const [current, imgs] = [
//   document.querySelector("#current"),
//   document.querySelectorAll(".imgs img"),
// ];

//run a foreach loop
//on any image under the imgs variable, add a click even listener
//where you set the source of the #current id to the event.target.src
//aka what you clicked on
imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    //reset the opacity of all images first

    imgs.forEach((img) => {
      img.style.opacity = 1;
    });

    current.src = e.target.src;
    current.classList.add("fade-in");
    setTimeout(() => {
      current.classList.remove("fade-in");
    }, 500);
    e.target.style.opacity = opacity;
  });
});
