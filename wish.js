const bgVid = document.querySelector("#bgVid");
const intro = document.querySelector(".intro");
const nextBtn = document.querySelector(".nextBtn");
const imageShow = document.querySelector(".imageShow");
const images = document.querySelectorAll(".images");
const mainContent = document.querySelector(".mainContent");

const wishBox = [
  `Jesus categorically stated "... he who believess and is baptized shall be saved" nothing else. 
The question then is "Believe in what?" 
Answer: Believe in the gospel. 
What is the gospel? 
Answer: 1 Cor. 15:1-4 it's:
1. The death
2. The burial
3. The resurrection of Jesus Christ.`,
  "another wish here",
  "add again"
  ]
let loop = 0;

let slider = setInterval(() =>{
  images.forEach(img => img.classList.remove('slideIn'));
  images[loop].classList.toggle('slideIn');
  mainContent.textContent = wishBox[loop];
  loop++;
  if(loop >= images.length){
    loop = 0;
  }
} , 10000);
nextBtn.onclick = () =>{
  intro.classList.add('hide');
  imageShow.classList.add('show');
  mainContent.classList.add('sshow');
}
bgVid.play();