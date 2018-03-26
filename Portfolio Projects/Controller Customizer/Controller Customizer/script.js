// const logos = document.getElementsByClassName("logo-caption");
const logos = document.querySelectorAll('.logo-caption');
// console.log(logos);
// console.log(logos[0]);

const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();

  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;

  // compensate for if window has been scrolled
  highlight.style.left = `${linkCoords.left + window.scrollX}px`;
     highlight.style.top = `${linkCoords.top + window.scrollY}px`;
}


// when mouse moves over each element in "logos"
logos.forEach(event => event.addEventListener('mouseenter', highlightLink));
