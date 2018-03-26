// const logos = document.getElementsByClassName("logo-caption");
const logos = document.querySelectorAll('.logo-caption');
// console.log(logos);
// console.log(logos[0]);
const highlight = document.createElement('span');
const footer = document.querySelector('.footer');

highlight.classList.add('highlight');

// document.body.append(highlight);
footer.append(highlight);


function highlightLink() {
  const footerCoords = footer.getBoundingClientRect();
  const linkCoords = this.getBoundingClientRect();

  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;

  // compensate for if window has been scrolled
  highlight.style.left = `${linkCoords.left + window.scrollX}px`;
  highlight.style.top = `${linkCoords.top - footerCords.top + window.scrollY}px`;
}


const batman = document.getElementById('batman-logo');
console.log(batman);
const sticker = document.getElementById('sticker');

batman.addEventListener("mousedown", event => {
  sticker.src = "media/images/sticker-batman-blue.png";
  document.body.style.backgroundImage = "url('media/images/dark-transparent-background.png'), url('media/images/batman-background.jpg')";
});





// when mouse moves over each element in "logos"
logos.forEach(event => event.addEventListener('mouseenter', highlightLink));
