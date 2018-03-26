// const logos = document.getElementsByClassName("logo-caption");
const logos = document.querySelectorAll('.logo-caption');
// console.log(logos);
// console.log(logos[0]);

const highlight = document.createElement('span');

highlight.classList.add('highlight');

const footer = document.querySelector('.footer');

// document.body.append(highlight);
footer.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();

  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;

  // compensate for if window has been scrolled
  highlight.style.left = `${linkCoords.left + window.scrollX}px`;
  highlight.style.top = `${linkCoords.top + window.scrollY}px`;
}


const batman = document.getElementById('batman-logo');
console.log(batman);
const sticker = document.getElementById('sticker');

batman.addEventListener("mousedown", event => {
  console.log("clicked!");
  sticker.src = "media/images/sticker-batman-blue.png";
});





// when mouse moves over each element in "logos"
logos.forEach(event => event.addEventListener('mouseenter', highlightLink));
